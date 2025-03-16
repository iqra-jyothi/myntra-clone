import { FcBusinessman } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { useRef, useState } from "react";
import { FcBusiness } from "react-icons/fc";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

import { CiFilter } from "react-icons/ci";
import Slider from "./Slider";
import { useDispatch} from 'react-redux';
// import { useState } from "react";
import { filterByCategory } from '../store/ProducReducer';
const Header=()=>{


  

  

const bag=useSelector((store)=>store.bag)

const [isSliderOpen, setIsSliderOpen] = useState(false);
const dispatch = useDispatch();
  // Function to toggle the slider
  const toggleSlider = () => {
    // console.log("hemml")
    setIsSliderOpen(!isSliderOpen);
  };

  const inputval= useRef();

  const handleSubmit = (e) => {
    const val = inputval.current.value.trim(); // Remove extra spaces
    if (val) {
      dispatch(filterByCategory(val)); // Dispatch the action
      inputval.current.value = ""; // Clear input field after dispatch
      // console.log(val + " dispatched to store");
    }// Clear input field after dispatch
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };




    return(
        <>
             <header>
        <div className="logo_container main-content">
            <Link to="/" ><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>

        <div  className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input ref={inputval} onKeyDown={handleKeyDown}className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        
        <div className="action_bar  ">
        
      <a className="action_container" onClick={toggleSlider} > <CiFilter /><span className="action_name">slider</span></a>

            <div className="action_container">
            <FcBusinessman />
                <span className="action_name">Profile</span>
            </div>

            <Link to="/Wishlist" className="action_container">
            <FcLike />
                <span className="action_name">Wishlist</span>
            </Link>

            <Link to="/bag"className="action_container" >
            <FcBusiness />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>        
    </header>
    <Slider isSliderOpen={isSliderOpen} />

  {/* <div>
        {filteredProducts.map(product => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div> */}


        </>
    )
}
export default Header;