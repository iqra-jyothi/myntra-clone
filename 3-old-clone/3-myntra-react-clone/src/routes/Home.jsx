import HomeItem from "../component/HomeItem"
import {useSelector} from "react-redux"
const Home=()=>{
    const items=useSelector((store)=>store.items)
   
    const filteredProducts = useSelector((store) => store.itemss.filteredProducts);
    // console.log("the",items)
    return(
        <>
          <main>
        
        {/* <div className="items-container">
        {items.map((item)=> <HomeItem key={item.id}item={item}></HomeItem>)} 
        
        </div> */}

<div className="items-container">
          {filteredProducts.length > 0 ? (
            // Render filtered products dynamically
            filteredProducts.map((item) => (
              <HomeItem key={item.id} item={item}></HomeItem>
            ))
          ) : (
            // Show a fallback message if no products are available
            <div className="items-container">
            {items.map((item)=> <HomeItem key={item.id}item={item}></HomeItem>)} 
            
            </div> 
           
          )}
        </div>

      
    </main>
        </>
    )
}
export default Home