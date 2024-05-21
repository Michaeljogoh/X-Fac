import { createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Post from './Pages/Post/Post'; 
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import HeadNav from './components/Admin/HeadNav/HeadNav';
import SideNav from './components/Admin/SideNav/SideNav';
import Talents from './Pages/Talents/Talents';
import SingleTalent from './Pages/SingleTalent/SingleTalent';
import PrivateRoute from './Auth/authPrivateRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



const Layout = () =>{
  return(
    <>
    < Navbar />
    <Outlet/>
    
    </>
  )
}

const Layout2 = () =>{
  return(
    <>
    < HeadNav />
    <Outlet />
    <SideNav />
    </>
  )
}


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
     {
      path:'/',
      element:<Home />
     },
     {
      path:'/post',
      element:<Post />
     },
   
    ]
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  // dasboard layout
  {
   path:'/',
   element: < Layout2 />,
   children:[
    {
      path:'/dashboard',
      element: (<PrivateRoute><Talents /></PrivateRoute>)
    },
    {
      path:'/dashboard/talents',
      element: (<PrivateRoute>< Talents /></PrivateRoute>)
    },
    {
      path:'/dashboard/talents/:id',
      element:  (<PrivateRoute>< SingleTalent /></PrivateRoute>)
    },
    {
      path:'/dashboard/talents/create',
      element: (<PrivateRoute>< Post /></PrivateRoute>)
    },
   ]
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer />
    </>
  );
}

export default App;
