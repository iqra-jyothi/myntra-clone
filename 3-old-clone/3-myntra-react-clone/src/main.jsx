import { children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';
import {Provider} from "react-redux"
import myntrastore from './store/index.js';
import Wishlist from './routes/Wishlist.jsx'
import Slider from './component/Slider.jsx';
const router=createBrowserRouter([
  {
path:"/",
element:<App/>,
children:[
  {path:"/",element:<Home></Home>},
  {path:"/bag",element:<Bag></Bag>},
  {path:"/Wishlist",element:<Wishlist></Wishlist>},
  //  {path:"/slider",element:<Slider></Slider>}

]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={myntrastore}>
   <RouterProvider router
   ={router}>
   </RouterProvider>
  </Provider> 
  </StrictMode>,
)
