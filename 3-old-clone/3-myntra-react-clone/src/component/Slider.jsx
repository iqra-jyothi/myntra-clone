
import App from "../routes/App";
import { FaChildReaching } from "react-icons/fa6";
import { FcManager } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { RiBrushAiFill } from "react-icons/ri";
import { SiAppletv } from "react-icons/si";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../store/ProducReducer";
// import { useState } from "react";
const Slider=({isSliderOpen})=>{

  const dispatch = useDispatch();

  const handleFilter = (category) => {
    // console.log("filter")
    dispatch(filterByCategory(category));
  };

  

    return (
       <>
        {isSliderOpen ? 
     <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary slider"  style={{ width: '180px', backgroundColor: '#f0f8ff'}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">category</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li onClick={() => handleFilter("kids")} class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          <FaChildReaching /> kids
        </a>
      </li>
      <li onClick={() => handleFilter("men")}>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          <FcManager />mens
        </a>
      </li>
      <li onClick={() => handleFilter("women")}>
        <a  href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          <FcBusinesswoman /> womens
        </a>
      </li>
      <li onClick={() => handleFilter("makeup")}>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          <RiBrushAiFill /> makeup
        </a>
      </li>
      <li onClick={() => handleFilter("electric")}>
        <a href="#" class="nav-link link-body-emphasis">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          <SiAppletv />electric
        </a>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        {/* <strong>mdo</strong> */}
      </a>
    </div>
  </div>:"" }
       </>
    )
}
export default Slider