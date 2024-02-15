import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    let url = import.meta.env.VITE_CURRENCY_API

    useEffect(()=>{
        fetch(`${url}${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        // console.log(data);
    },[currency])
    // console.log(data);
    return data
}
// Our own custom hoooookr
export default useCurrencyInfo