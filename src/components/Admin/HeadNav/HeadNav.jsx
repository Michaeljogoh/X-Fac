import { Link, useNavigate } from "react-router-dom";
import "./headnav.css"

const HeadNav = () =>{
  let navigate = useNavigate();

  const logout = () =>{
   let rm = localStorage.removeItem("token")
    navigate('/')
  }

   return(
    <>
<header class="navbar navbar-dark fixed-top mb-5  bg-dark flex-md-nowrap p-0 shadow" >
  <Link class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" to={'/'}>X-Factor-Production</Link>
  <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <input class="form-control form-control-dark w-100 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/>
  <div class="navbar-nav">
    <div class="nav-item text-nowrap">
      <div class="nav-link active  px-3" style={{backgroundColor:"#191c1f", cursor:"pointer"}} onClick={logout}>Sign out</div>
     
    </div>
  </div>
</header>
</>
   )
}

export default HeadNav 