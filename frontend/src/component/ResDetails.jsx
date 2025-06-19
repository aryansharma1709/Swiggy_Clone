import  { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function ResDetails() {
    const {id}=useParams();
    console.log(id);
    const api=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.87960&lng=78.07620&restaurantId=${id}&submitAction=ENTER`
    const [restInfoDetails, setResInfoDetails]=useState([]);
     useEffect(()=>{
      async function calling(){
            let restInfo= await axios.get(api);
            setResInfoDetails(restInfo.data.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);
          }
          calling();
        },[id])
          const dispatch=useDispatch();

        return (
  <div className="bg-gray-100 min-h-screen py-10">
    <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
      Items Available at Restaurant: <span className="text-green-600">{id}</span>
    </h1>

    {restInfoDetails.map((foodItem, index) => (
      <div
        key={index}
        className="flex items-center justify-between w-11/12 md:w-3/4 mx-auto mb-6 bg-white rounded-xl shadow-md p-5 hover:scale-[1.02] transition-transform duration-200"
      >
        {/* Left - Details */}
        <div className="flex flex-col gap-2 w-3/4">
          <h2 className="text-xl font-semibold text-gray-900">
            {foodItem.card.info.name}
          </h2>
          <p className="text-green-700 font-medium">
            ₹{(foodItem.card.info.defaultPrice || foodItem.card.info.price) / 100}
          </p>
          <p className="text-sm text-gray-600">{foodItem.card.info.category}</p>
        </div>

        {/* Right - Image + Button */}
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-40 h-36 object-cover rounded-lg border border-gray-200 shadow-sm"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
            alt={foodItem.card.info.name}
          />

          <button onClick={()=> dispatch(addItem(foodItem))}className="mt-2 px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 active:scale-95 transition-all">
            Add +
          </button>
        </div>
      </div>
    ))}
  </div>
);
}
export default ResDetails;

// return (
  //   <div>
  //   <h1 className='text-center font-2xl font-bold'>List of items available for RESTAURANT :{id}</h1>
  //   {
  //       restInfoDetails.map((foodItem)=>{
  //           return (
  //               <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
  //                   <div className="flex flex-col w-3/4">
  //                           <h1>{foodItem.card.info.name}</h1>
  //                           <h1>{foodItem.card.info.defaultPrice / 100}</h1>
  //                           <h1>{foodItem.card.info.category}</h1>
  //                       </div>
  //                       <img
  //                       className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
  //                       src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
  //                       alt="" />

  //                       <button className="border bg-green-300 h-8 relative top-16 right-5">
  //                       Add +
  //                       </button>
  //                   </div>
  //                   );
  //                   })}
  //               </div>
  // )