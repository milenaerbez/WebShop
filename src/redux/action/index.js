//adding items

export const addToCart=(product)=>{
   return{
    type: "ADDTOCART",
    payload : product
   }

}
export const removeFromCart=(product)=>{
    return{
     type: "REMOVE",
     payload : product
    }
 
 }