import { useNavigate } from "react-router-dom";
import { baseURL } from "../../API/API";
import { useState } from "react";
import axios from 'axios';
import "./Post.css"
import AuthHeader from "../../Auth/authHeader";




const Post = () => {
 const [firstname , setFirstname ] = useState("");
 const [lastname, setLastname] = useState("");
 const [summarize , setSummarize] = useState("");
 const [selectFile , setSelectFile] = useState(null);
 const [disabled, setDisabled] = useState(false);
 const [loading, setLoading] = useState(false);

 let navigate = useNavigate();

 const handleSubmit = async (e) =>{
  e.preventDefault();
  const newData = {
    firstname,
    lastname,
    summarize,
    file:selectFile
  }
  try {
   await axios.post(`${baseURL}/api/v1/talent/create`, newData , {headers:{"Content-Type":"multipart/form-data"}});
   setDisabled(true); 
   setLoading(true);
   navigate('/dashboard/talents');
  } catch (error) {
  
   setDisabled(false);
   setLoading(false);
  }
 }

    return (
      <>
      <main class="col-md-9 ms-sm-auto mt-5 col-lg-10 px-md-5 " >
      <h1 className="text-center">Create New Talent</h1>
       <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-9">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" onChange={(e) => setFirstname(e.target.value)} required/>
            </div>
            <div className="mb-3">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" onChange={(e) => setLastname(e.target.value)} required/>
            </div>
          <div class="mb-3">
          <label for="floatingTextarea2" class="form-label">Summary</label>
          <textarea class="form-control" placeholder="Leave a summary here" id="floatingTextarea2" onChange={(e) => setSummarize(e.target.value)}   style={{height:"100px"}}  ></textarea>
       </div>
        <div class="mb-3">
         <label for="formFile" class="form-label">Video</label>
        <input class="form-control" type="file" onChange={(e) => setSelectFile(e.target.files[0])} id="formFile"/>
       </div>
       <div class="mb-3 form-check">
       <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
       <label class="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
        <button type="submit" disabled={disabled} class="btn btn-primary">{loading ? "Loading":"Submit"}   </button>
        </form>
          </div>
        </div>
       </div>
           
      </main>
      </>
    );
  };
  
  export default Post;