import Header from '../component/Header'
import './App.css'
import Footer from '../component/Footer'

import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Fetchitem from '../component/Fetchitem'
import Loading from '../component/Loading'
function App() {

  
    const fetchstates= useSelector((store)=>store.fetchstates)


  // const location = useLocation();
  // console.log("Current Route:", location.pathname);
  return(
    <div>
<Header></Header>
<Fetchitem/>
{fetchstates.currentlyfetching ?<Loading></Loading>: <Outlet></Outlet>}
  <Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default App
