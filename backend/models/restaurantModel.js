import mongoose from "mongoose";

const restaurantSchema =new mongoose.Schema({
    Name: {
        type: String,
        required:true
    }
    ,
    devileryTIme:
    {type :String},
    imageUrl:{
        type:String,
        required:true
    },
    cuisines:{
        type: String,
        required:true,
    },
    rating:{type:Number},
    address:{type: String},
})
const Restaurants=mongoose.model("Restaurants",restaurantSchema);
export default  Restaurants;