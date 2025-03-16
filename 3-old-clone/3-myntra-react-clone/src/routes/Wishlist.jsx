import { useSelector } from "react-redux"
import WhishItem from "../component/WhishItem"

// import { useSelector } from "react-redux"
const Wishlist=()=>{


  const bagitem =useSelector((state)=>state.wish)
  const items =useSelector((state)=>state.items)

  const finalitems=items.filter(item=>{
    const itemindex=bagitem.indexOf(item.id)
    return itemindex >=0
  })
    return(
       <>
    
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalitems.map(item=>  <WhishItem key={item.id} item={item}></WhishItem>)}
        
        </div>
        
      

      </div>
    </main>

       </>
    )
}
export default Wishlist
