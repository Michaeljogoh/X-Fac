import { useState , useEffect } from "react";
import { baseURL } from "../../API/API";
import axios from 'axios';
import Loading from "../../components/Loading/Loading";
import { useLocation , Link } from "react-router-dom";
import authHeader from "../../Auth/authHeader";
import { useNavigate } from "react-router-dom";


const Talents = () =>{
    const [talents , setTalent] = useState([]);
    const [isLoaded , setIsloaded] = useState(false);
    const {search } = useLocation();
    const [currentPage , setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = talents.slice(firstIndex , lastIndex);
    const npage = Math.ceil(talents.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    let navigate = useNavigate()

    const logOut = ()  =>{
      localStorage.removeItem("user");
      navigate('/login')
    }  

    useEffect(() =>{
     const fetchData =  async () =>{
      try {
        setIsloaded(true)
        const res = await axios.get(`${baseURL}/api/v1/talent/` + search);
        setTalent(res.data.getAllTalents);
        
        console.log(res);
       
      } catch (error) {
          console.log("Private page", error.response);
          }  
     }
     fetchData();
    }, [search])

const sortApproved =  async () =>{

await axios.get(`${baseURL}/api/v1/talent/`);

  const approvedList = talents.filter((t) =>{
    return t.status === "approved"
  });
  setTalent(approvedList);

}
const sortPending =  async () =>{

await axios.get(`${baseURL}/api/v1/talent/`);

  const approvedList = talents.filter((t) =>{
    return t.status === "pending"
  });
  setTalent(approvedList);

}
const sortRejected =  async () =>{

await axios.get(`${baseURL}/api/v1/talent/`);

  const approvedList = talents.filter((t) =>{
    return t.status === "rejected"
  });
  setTalent(approvedList);

}


    return (
        <>
  {/* <!-- Table --> */}
 <main class="col-md-9 ms-sm-auto mt-5 col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Talents</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-secondary">Export</button>
          </div>
          {/* sort */}
          <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
            <ul class="dropdown-menu bg-light" style={{cursor:"pointer"}}>
              <li><a class="dropdown-item">All talents</a></li>
              <li><a class="dropdown-item" onClick={() => sortPending()}>Pending</a></li>
              <li><a class="dropdown-item" onClick={sortApproved}>Approved</a></li>
              <li><a class="dropdown-item" onClick={sortRejected} >Rejected</a></li>
            </ul>
        </div>
      </div>
{/*  */}
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col" className="pe-4">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col" className="pe-4">Video</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoaded ? (
             records.map((talent , i) =>{
              return (
              <tr key={i} >
              <td className="pt-2">{}</td>
              <td className="pt-2">{talent.firstname}</td>
              <td className="pt-2">{talent.lastname}</td>
              <td className="text-dark fs-4" style={{cursor:"pointer"}}><Link to={`/talents/${talent._id}`}><i class="bi bi-play-circle-fill text-dark"></i></Link></td>
              <td>
              <span className={talent.status === "approved" ? "text-white btn btn-success btn-sm" : ""  || talent.status ==='rejected' ? " text-white btn btn-danger btn-sm" :"" || talent.status ==='pending' ? " text-white btn btn-warning btn-sm" :""}>{talent.status}</span>
              </td>
            </tr>
             )
             })
            ): (
              <div></div>
            )}
          </tbody>
        </table>
         <nav>
          <ul className="pagination" style={{cursor:"pointer"}}>
            <li className="page-item">
              <a  className="page-link bg-dark text-white" style={{cursor:"pointer"}}  onClick={prePage}>Prev</a>
            </li>
  
            {
              numbers?.map((n , i) =>(
                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                  <a className="page-link  border-dark "  onClick={() =>changeCpage(n)}>{n}</a>
                </li>
              ))
            }
            <li className="page-item text-white">
              <a  className="page-link bg-dark text-white" style={{cursor:"pointer"}} onClick={nextPage}>Next</a>
            </li>
          </ul>
         </nav>

      </div>
</main> 
    
          
       
        </>
    )
    function prePage() {
      if(currentPage !== 1){
        setCurrentPage(currentPage -1)
      }
    }

    function changeCpage(id){
       setCurrentPage(id)
    }

    function nextPage() {
      if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
      }
    }
}

export default Talents;