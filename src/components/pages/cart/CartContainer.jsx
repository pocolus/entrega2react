
import { useEffect } from "react"

import { useNavigate } from "react-router-dom"

const CartContainer = () => {

  const navigate = useNavigate()

  const realizarCompra = ()=>{
    console.log("se compraron los productos")
    
    navigate("/")
  }

  return (
    <div>
        <h1 style={{textAlign: "center", color:"darkred", padding:"20px"}} >Carrito de Compras</h1>
        <button onClick={realizarCompra} style={{position: "relative",  left: "48%", color:"darkred", padding:"5px"}}  >Comprar</button>
    </div>
  )
}

export default CartContainer