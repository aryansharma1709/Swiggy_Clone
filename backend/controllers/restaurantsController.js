import Restaurants from "../models/restaurantModel.js"

export const createRestaurants= async (req,res)=>{
    
    const {Name,deliveryTime,imageUrl,cuisines,rating,address}=req.body;
       try{
          if(!Name || !cuisines || !imageUrl)
          {
             return res.status(400).json({message:"All fields is required"});
          }
          const newRestaurants =new Restaurants({
             Name,
             deliveryTime,
             imageUrl,
             cuisines,
             rating,
             address
          });
          if(newRestaurants){
             await newRestaurants.save();
             return  res.status(200).json({
                 _id:newRestaurants._id,
                Name:newRestaurants.Name,
                deliveryTIme:newRestaurants.deliveryTIme,
                imageUrl:newRestaurants.imageUrl,
                cuisines:newRestaurants.cuisines,
                rating: newRestaurants.rating,
                address:newRestaurants.address

             });
            }
             else
             {
                res.status(400).json({ message: "Invalid user data" });
             }
          
       }
       catch(error)
       {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
       }
}

 export const getRestaurant=async(req,res)=>{
       try{
            const allRestaurant = await Restaurants.find({});
        return res.status(200).json(allRestaurant);
       }
       catch (error) {
    console.log("Error in getRestaurant controller", error.message);
    res.status(400).json({ message: "Internal Server Error" });
  }
 }


export const  updateRestaurant= async (req,res)=>{
     try{
          let {id}= req.params;
          let {Name,deliveryTIme,imageUrl,address,rating,cuisines}=req.body;
          const updateRest=await Restaurants.findByIdAndUpdate(id,{Name,deliveryTIme,imageUrl,address,rating,cuisines},{new:true})
          return res.status(200).json(updateRest);
     }
     catch(error)
     {
        
    console.log("Error in upadateRestaurant controller", error.message);
    res.status(400).json({ message: "Internal Server Error" });
  }
     }

     export const deleteRestaurant = async (req,res)=>{

       try{
            let {id}= req.params._id;
            const deleteRest=await Restaurants.findByIdAndDelete(id);
            return  res.status(200).json(deleteRest);
       }
       catch (error) {
    console.log("Error deleteRestaurant controller", error.message);
    res.status(400).json({ message: "Internal Server Error" });
  }
      }
