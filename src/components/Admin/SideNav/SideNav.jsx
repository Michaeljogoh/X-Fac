import { Link } from "react-router-dom";
import "./sideNav.css"




const SideNav = () =>{
    return (
        <>
<div class="container-fluid">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-body-tertiary sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={'/dashboard/talents'}>Talents</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link" to={'/dashboard/talents/create'}>Add Talents</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
  </>
    )
}

export default SideNav;