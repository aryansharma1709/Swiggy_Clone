import { configureStore} from '@reduxjs/toolkit'
import cartReducer from "./cartSlice";
const appStore=configureStore({
    reducer:{
        // slices 
         cart:cartReducer,
        //  user:userReducer

    }
});

export default appStore;