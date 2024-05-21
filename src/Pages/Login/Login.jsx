import axios from "axios";
import { useState } from "react";
import { baseURL } from "../../API/API";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");
  
   let navigate = useNavigate()
  
    const handleSubmit = async (e) =>{
      e.preventDefault();
  
      const newUser = {
        email,
        password
      }
  
      try {
   const res  =   await axios.post(`${baseURL}/api/v1/user/login`, newUser , {headers:{"Content-Type":"application/json"}});

   let setJwt = localStorage.setItem("token", JSON.stringify(res.data.access))
    
   navigate('/dashboard/talents');

   } catch (error) {
        console.log(error)
 }
    }
      return (
        <>
        <div class="row justify-content-center">
  
       <div class="col-xl-10 col-lg-12 col-md-9">
  
      <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
              <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                      <div class="p-5">
                          <div class="text-center">
                              <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                          </div>
                          <form class="user" onSubmit={handleSubmit}>
                              <div class="form-group mb-3">
                                  <input type="email" class="form-control form-control-user"
                                      id="exampleInputEmail" onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"
                                      placeholder="Enter Email Address..."/>
                              </div>
                              <div class="form-group">
                                  <input type="password" class="form-control form-control-user"
                                      id="exampleInputPassword" onChange={(e) =>setPassword(e.target.value)} placeholder="Password"/>
                              </div>
                              <div class="form-group mb-3">
                                  <div class="custom-control custom-checkbox small">
                                      <input type="checkbox" class="custom-control-input" id="customCheck"/>
                                      <label class="custom-control-label mt-3" for="customCheck">Remember
                                          Me</label>
                                  </div>
                              </div>
                               <button type="submit" class="btn btn-primary">Login</button>
                              <hr/>
                              <a href="index.html" class="btn btn-google btn-user btn-block">
                                  <i class="fab fa-google fa-fw"></i> Register with Google
                              </a>
                              <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                              </a>
                          </form>
                          <hr/>
                          <div class="text-center">
                              <a class="small" href="forgot-password.html">Forgot Password?</a>
                          </div>
                          <div class="text-center">
                              <a class="small" href="register.html">Login an Account!</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  
  </div>
  
  </div>
        </>
      );
};
  
  export default Login;