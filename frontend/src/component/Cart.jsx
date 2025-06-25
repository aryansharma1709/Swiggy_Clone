import { useDispatch, useSelector } from "react-redux"
import {clearCart} from "../utils/cartSlice"
function Cart() {
   const cartItems=useSelector((store)=>store.cart.items)
     const dispatch = useDispatch();
     console.log(cartItems);
  return (
      <div className="bg-gray-100 min-h-screen py-10">
         <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
           Cart Items
         </h1>
     
         {cartItems?.map((foodItem) => (
           <div
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
     
             </div>
           </div>
         ))}
               <button onClick={()=> dispatch(clearCart())}className="m-2 px-4 py-1 bg-red-500 text-white rounded-md active:scale-95 transition-all">
               clear Cart
               </button>
       </div>
  )
}

export default Cart