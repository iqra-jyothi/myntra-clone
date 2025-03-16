import { useSelector } from "react-redux"
import BagItem from "../component/BagItem"
import BagSummary from "../component/BagSummary"
// import { useSelector } from "react-redux"
const Bag=()=>{


  const bagitem =useSelector((state)=>state.bag)
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
          {finalitems.map(item=>  <BagItem item={item}></BagItem>)}
        
        </div>
        <BagSummary></BagSummary>
      

      </div>
    </main>

       </>
    )
}
export default Bag