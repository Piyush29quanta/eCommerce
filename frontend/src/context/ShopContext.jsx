import React,{ createContext } from "react" 
import { products  } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider =(props)=> {
    const currency = "₹";
    const delivery_fee = 10;
    const [search,setSearch] = React.useState("");
    const [showSearch,setShowSearch] = React.useState(false);

    const value = {
           products,currency,delivery_fee,search,setSearch,showSearch,setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
 
export default ShopContextProvider;