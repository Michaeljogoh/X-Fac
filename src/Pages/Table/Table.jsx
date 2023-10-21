import { useState , useEffect } from "react";
import { baseURL } from "../../API/API";
import axios from 'axios';
import Loading from "../../components/Loading/Loading";
import { useLocation , Link } from "react-router-dom";
import authHeader from "../../Auth/authHeader";
import { useNavigate } from "react-router-dom";


const Table = () =>{
    const [talents , setTalent] = useState([]);
    const [isLoaded , setIsloaded] = useState(false);
    const {search } = useLocation();

    let navigate = useNavigate()

    const logOut = ()  =>{
      localStorage.removeItem("user");
      navigate('/login')
    }  

    useEffect(() =>{
     const fetchData =  async () =>{
      try {
        const res = await axios.get(`${baseURL}/api/v1/talent/` + search , {headers: authHeader()});
        setTalent(res.data.getAllTalents);
        console.log(res);
        setIsloaded(true)
      } catch (error) {
           logOut()
          console.log("Private page", error.response);
          // Invalid token
          if (error.response && error.response.status === 403) {
            
            window.location.reload();
          }
      }
   
      
     }
     fetchData();
    }, [search])

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent.slice(0 , 26)
    
      }


    return (
        <>
                <div class="row">
                <div class="col-12 grid-margin">
                <div class="card bg-secondary">
                  <div class="card-body">
                    <h4 class="card-title text-dark">Order Status</h4>
                    <div class="table-responsive">
                      <table class="table" >
                        <thead>
                          <tr>
                            <th>
                            <div class="form-check">
                            <input class="form-check-input mt-2  fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                          </div>
                            </th>
                            <th className="text-dark">First Name </th>
                            <th className="text-dark">Last Name</th>
                            <th className="text-dark">Summarize </th>
                            <th className="text-dark">Video</th>
                            <th className="text-dark">Status </th>
                          </tr>
                        </thead>

                    <tbody>
                    {isLoaded ? (
                    talents?.map((talent , i)=>{
                       return(
                          <tr key={i} className="border-bottom">
                            <td >
                            <div class="form-check">
                            <input class="form-check-input fs-5" type="checkbox" value="" id="flexCheckDefault"/>
                           </div>
                            </td>
                            
                            <td className="text-dark">{talent.firstname}</td>
                            <td className="text-dark">{talent.lastname}</td>
                            <td className="text-dark">{ getText(talent.summarize)}...</td>
                            <td className="text-dark fs-4" style={{cursor:"pointer"}}>
                            <Link to={`/posts/${talent._id}`}><i class="bi bi-play-circle-fill text-dark"></i></Link>
                            </td>
                            <td>
                              <div class="badge badge-success">Approved</div>
                            </td>
                            {/* <td>
                            <Link to={`/posts/${talent._id}`}>Xhdf</Link>
                            </td> */}
                          </tr>
                          
                              )})
                              ) : (
                                <Loading/>
                              )}
                      
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                 
          
       
        </>
    )
}

export default Table;