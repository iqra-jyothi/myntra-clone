import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { itemsActions } from "../store/itemsSlice"
import { fetchaction } from "../store/fetchStatus"
// import {addInitialItems} from "./itemsSlice"
const Fetchitem=()=>{
   const fetchstates= useSelector((store)=>store.fetchstates)

const dispatch=useDispatch()
   useEffect(() => {
    if (fetchstates.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchaction.markfetching());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchaction.markfetchDone());
        dispatch(fetchaction. markfetchingfinished());
        dispatch(itemsActions.addInitialItems(items[0]))
        // console.log("item fetched",items)
      //  dispatch(itemsActions.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchstates]);





    return (
        <>
    {/* fetch done:{fetchstates.fetchDone}
    currently fetching:{fetchstates.currentlyfetching} */}
        </>
    )
}
export default Fetchitem