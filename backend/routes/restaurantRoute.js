import  express from "express";
import { createRestaurants, deleteRestaurant, getRestaurant, updateRestaurant } from "../controllers/restaurantsController.js";

const router= express.Router();

 router.post("/createrestaurants",createRestaurants);
 router.get("/getrestaurant",getRestaurant);
 router.put("/updaterestaurant/:id",updateRestaurant);
 router.delete("deleterestaurant/:id",deleteRestaurant)

export default router;