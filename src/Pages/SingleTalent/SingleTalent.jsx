
import { useEffect , useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate , useParams } from 'react-router-dom';
import { baseURL } from '../../API/API';





const SingleTalent = () =>{
 const [firstname , setFirstname] = useState('')
 const [lastname, setLastname] = useState('')
 const [summarize , setSummarize] = useState('')
 const [file, setFile] = useState('')
 const location = useLocation();
 const path = location.pathname.split("/")[2];

 useEffect(() =>{
 const getTalentById = async () =>{
  const res = await axios.get(`${baseURL}/api/v1/talent/${path}`);
  setFirstname(res.data.getTalentById.firstname);
  setLastname(res.data.getTalentById.lastname);
  setSummarize(res.data.getTalentById.summarize);
  setFile(res.data.getTalentById.file)
 };

 getTalentById();
 }, [path])

 const { id } = useParams();
 const navigate = useNavigate();

 const handleApproved = async () =>{
  let newdata = {
    status:"approved"
  }
 const res = await axios.patch(`${baseURL}/api/v1/talent/${id}`, newdata);
 console.log(res.data)
 }

 const handleRejected = async () =>{
  let newdata = {
    status:"rejected"
  }
 const res = await axios.patch(`${baseURL}/api/v1/talent/${id}`, newdata);
 console.log(res.data)
 }


  return(
    <>

  <main class="col-md-9 ms-sm-auto  col-lg-10 px-md-4" style={{marginTop:"80px"}}>
    
    {/* Video */}
  <div className="container">
    <div className="row">
      <div className="col-md-12">
     <video controls className='img-fluid rounded ' loop src={file} type="video/mp4"  />
      </div>
    </div>
  </div>
     {/* Name */}
    <h1 className="fst-italic display-5 fw-bold text-center">{firstname} {lastname}</h1>
    {/* summarize */}
    <p>
     {summarize}
    </p>

    {/*Status */}
    <div className="mb-5 float-end">
    <button className="btn btn-success btn-md" onClick={handleApproved}>Approved</button>
    <button className="btn btn-danger btn-md ms-3" onClick={handleRejected}>Rejected</button>

    </div>
</main> 

    </>
    )
}

export default SingleTalent;