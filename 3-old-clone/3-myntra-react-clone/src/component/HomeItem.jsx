import { useDispatch } from "react-redux"
import { BagActions } from "../store/BagSlice"
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { MdOutlineAutoDelete } from "react-icons/md";
import { wishActions } from "../store/WishlistSlice";

import { FcLike } from "react-icons/fc";

import { FaRegHeart } from "react-icons/fa6";


const HomeItem=({item})=>{
   
const bagitem=useSelector((store)=>store.bag)
const elementfound=bagitem.indexOf(item.id)>=0;
// console.log(item.id,elementfound)


const  dispatch=useDispatch()
const handlebag=()=>{
    // console.log(item.id);
    dispatch(BagActions.addToBag(item.id));

}

const handleremove=()=>{
    // console.log(item.id);
    dispatch(BagActions.removeFromBag(item.id));

}

//whishlist



const whishitem=useSelector((store)=>store.wish)
const elementwhish=whishitem.indexOf(item.id)>=0;
// console.log(item.id,elementfound)


const  dispatchs=useDispatch()

const handlebags=()=>{
    // console.log(item.id);
    dispatchs(wishActions. addTowhish(item.id));

}

const handleremoves=()=>{
    // console.log(item.id);
    dispatchs(wishActions. removeFromwhish(item.id));

}




    return (<>
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      {elementwhish ?<button className="btn btn-outline-warning border border-0" onClick={handleremoves}><FcLike /></button>:<button onClick={handlebags}className="btn btn-outline-success border border-0"><FaRegHeart /></button>}
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
       
      </div>
     
{elementfound ?
<button onClick={handleremove} type="button" className="btn btn-danger btn-add-bag"><MdOutlineAutoDelete /> remove</button>: <button type="button" className="btn btn-success btn-add-bag" onClick={handlebag}> <MdAddShoppingCart />add to bag</button>}




    </div>
    </>)
}
export default HomeItem