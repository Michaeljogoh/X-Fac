import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
const [currentUser , setCurrentUser] = useState(undefined);

let navigate = useNavigate();

useEffect(()=>{
const token = localStorage.getItem('token')
   if (token){
    setCurrentUser(token)
   }
}, [])

const logOut = () =>{
  localStorage.removeItem("token");
  navigate('/')
}

return (
      <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {currentUser && (
        <li class="nav-item">
          <a class="nav-link active" onClick={logOut } style={{cursor:"pointer"}}  aria-current="page">LogOut</a>
        </li>
        )}
        <li class="nav-item">
        <Link class="nav-link active" to={'/post'}>Form</Link>
        </li>
        {currentUser ? 
       <li class="nav-item">
       <Link class="nav-link active" to={'/dashboard'}>Dashboard</Link>
       </li>
        :
        <></>
        }
    
        <div className="d-flex">
        <li class="nav-item">
          <Link class="nav-link active" to={'/register'}>Register</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" to={'/login'}>Login</Link>
          </li>
          </div>
   
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
      </>
    );
  };
  
  export default Navbar;