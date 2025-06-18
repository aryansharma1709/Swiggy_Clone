import ResCard from "./ResCard";
import ApiCall from "./ApiCall";
import { useEffect,useState } from "react";

function Body() {
    const resArr =  ApiCall();
    
    const [allResData ,setAllResData]=useState(resArr);
    console.log(allResData); 
    useEffect(()=>{
             
            if(resArr && resArr.length>0)
             {   setAllResData(resArr);
                 
             }
             
    },[resArr])
    // function handleChangeRating()
    // {  
    //        const res=allResData.filter(item=>item.info.avgRating>4.5)
    //        setAllResData(res);
    // }
    function handleChangeReset(){
            setAllResData(resArr);
    }
    function handleChangerate(event)
    { 
             
            const res=resArr.filter(item=>item.info.avgRating>event.target.value)
           setAllResData(res);
    }
    function handleChangeName(event){
           const res=resArr.filter((item)=>{
            const name=item.info.name.toLowerCase()
           return  name.includes(event.target.value.toLowerCase())
        })
        setAllResData(res)
    }
    return (
        <div className="px-6 md:px-20 py-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Restaurants with Online Food Delivery in Mathura
            </h1>

            {/* Filter & Search Controls */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
                {/* <button  onClick={handleChangeRating}className="border border-gray-400 text-gray-700 hover:bg-gray-100 rounded-2xl px-4 py-2 transition-all">
                    Rating 4.0+
                </button> */}
                <select name="rating" onChange={handleChangerate} className="border border-gray-400 text-gray-700 hover:bg-gray-100 rounded-2xl px-4 py-2 transition-all">
                    <option value="0">Select Rating</option>
                    <option value="4">4.0</option>
                    <option value="4.2">4.2</option>
                    <option value="4.6">4.6</option>
                    <option value="5">5.0</option>
                </select>
                <button onClick={handleChangeReset} className="border border-gray-400 text-gray-700 hover:bg-gray-100 rounded-2xl px-4 py-2 transition-all">
                    Reset
                </button>
                <input
                    type="text"
                    placeholder="Search Restaurant"
                    className="border border-gray-400 rounded-2xl px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={handleChangeName}
                />
            </div>

            {/* Restaurant Cards */}
            {Array.isArray(resArr) && resArr.length > 0 ? (
                <ResCard resArr={allResData} />
            ) : (
                <p className="text-gray-500 text-center mt-10">Loading restaurants...</p>
            )}
        </div>
    );
}

export default Body;

// import ResCard from "./ResCard";
// import ApiCall from "./ApiCall";
// function Body(){
//     const resArr=ApiCall();
//     console.log(resArr);
//     return (
//         <div className="ml-20 mt-4">
//             <h1 className="text-2xl">Restaurants with online food delivery in Mathura</h1>
//             <button className="border rounded-2xl p-2 mx-4">Rating 4.0</button>
//             <button className="border rounded-2xl p-2 mx-4">Reset</button>
//             <input className="border rounded-2xl p-2 mx-4" type="text" placeholder="Search Restraunt" />
//             <div>
//                 <ResCard resArr={resArr}/>
//             </div>
//         </div>
//     )
// }
// export default Body;