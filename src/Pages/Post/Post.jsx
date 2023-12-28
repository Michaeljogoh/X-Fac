import { useNavigate } from "react-router-dom";
import { baseURL } from "../../API/API";
import { useState } from "react";
import axios from 'axios'




const Post = () => {
 const [firstname , setFirstname ] = useState("");
 const [lastname, setLastname] = useState("");
 const [summarize , setSummarize] = useState("");
 const [selectFile , setSelectFile] = useState(null);

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
   navigate('/')
  } catch (error) {
   console.log(error) 
  }

 }

    return (

      <>
      
       <div className="container mt-5 mb-5" style={{position:"absolute", top:"200px", right:0}}>
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
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>

          </div>
        </div>
       </div>

         <footer class="footer-section " style={{position:'absolute' , top:"1500px"}}>
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4 className='text-white'>Find us</h4>
                                <span className='text-white'>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4 className='text-white'>Call us</h4>
                                <span className='text-white'>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4 className='text-white'>Mail us</h4>
                                <span className='text-white'>mail@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p className='text-white'>Copyright &copy; 2018, All Right Reserved</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li className='text-white'>Home</li>
                                <li className='text-white'>Terms</li>
                                <li className='text-white'>Privacy</li>
                                <li className='text-white'>Policy</li>
                                <li className='text-white'>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
   
      </>
    );
  };
  
  export default Post;