import axios from 'axios';
import { useEffect, useState } from 'react';
function ApiCall(){
    const [data, setData] =useState([])

    useEffect(function(){
        async function calling(){
        const api="https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        const res=await axios.get(api);
        setData(res.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        calling();
    },[])
   
  return data;
}
export default ApiCall;