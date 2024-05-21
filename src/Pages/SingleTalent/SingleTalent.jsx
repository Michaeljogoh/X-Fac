
import { useEffect , useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate , useParams } from 'react-router-dom';
import { baseURL } from '../../API/API';
import {toast} from "react-toastify"






const SingleTalent = () =>{
  const { id } = useParams();

 const [firstname , setFirstname] = useState('')
 const [lastname, setLastname] = useState('')
 const [summarize , setSummarize] = useState('')
 const [file, setFile] = useState('')
 

 useEffect(() =>{
  try {
    const getTalentById = async () =>{
     const res = await axios.get(`${baseURL}/api/v1/talent/${id}`);
     setFirstname(res.data.getTalentById.firstname);
     setLastname(res.data.getTalentById.lastname);
     setSummarize(res.data.getTalentById.summarize);
     setFile(res.data.getTalentById.file)
    };
   
    getTalentById();
    
  } catch (error) {
    console.log(error)
    
  }
 }, [])


 const navigate = useNavigate();

 const handleApproved = async () =>{
  let newdata = {
    status:"approved"
  }
 const res = await axios.patch(`${baseURL}/api/v1/talent/${id}`, newdata);
 toast.success("Talent Accepted", {toastId: "msnjdndj"})
 }

 const handleRejected = async () =>{
  let newdata = {
    status:"rejected"
  }
 const res = await axios.patch(`${baseURL}/api/v1/talent/${id}`, newdata);
 toast.error("Talent Rejacted", {toastId: id})
 }


  return(
    <>

  <main class="col-md-9 ms-sm-auto  col-lg-10 px-md-4" style={{marginTop:"80px"}}>
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