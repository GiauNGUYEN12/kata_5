import CartItem from "./cartItem"
import '../../styles/CartItemList.css'
import { useState, useEffect } from 'react';
function CartItemList(){

    const [ products, setProduct ] = useState([])
    useEffect(()=>{
        const fetchData = async() =>{
            const response = await fetch("http://localhost:3001/menu")
            const data = await response.json(); 
            setProduct(data);
            console.log(data) 
        }
        fetchData()
    }, [])

    return (
        <div className="CartItemListBody">
            {products.map((product)=>(
            <CartItem props={product}/>
        ))}
        </div>
    )
}
export default CartItemList; 