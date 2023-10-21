import { createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Post from './Pages/Post/Post'; 
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';



const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
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
  {
    path:'/dashboard',
    element:<Dashboard />
   },
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
