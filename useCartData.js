import { useState , useEffect } from "react"
import api from "../api"

function useCartData(){
    
    const [cartItems , SetCartItems] = useState([])
    const [cartTotal , SetCartTotal] = useState(0.00)
    const tax = 5.00
    const [loading , setLoading] = useState(false)

    const cart_code = localStorage.getItem("cart_code")

    useEffect(() => {

    setLoading(true)
    api.get(`/get_cart/?cart_code=${cart_code}`)
    .then(res => {
        console.log(res.data);
        setLoading(false)
        SetCartItems(res.data.items)
        SetCartTotal(res.data.sum_total)
        
    })
    .catch(err => {
        console.log(err.message);
        setLoading(false)
        
    })
    },[cart_code])


    return {cartItems , SetCartItems , cartTotal , SetCartTotal , loading , tax}
}


export default useCartData
