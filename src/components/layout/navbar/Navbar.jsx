import { BsFillCartFill } from "react-icons/bs"
import "./Navbar.css"

import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <div className="barra">
        <Link to="/" style={{fontSize: "40px", color: "darkred", padding:"15px"}}>Scarlata Jewelers</Link>

        <img src="./pic/favicon.png" alt="" size= "30px" width= "70px"/>

        
            <Link to="/category/Anillos" style={{textAlign: "center", padding: "30px",}}>Anillos</Link>
            <Link to= "/category/Relojes" style={{textAlign: "center", padding: "30px", width: "15%"}}>Relojes</Link>
            <Link to= "/category/Brazalete" style={{textAlign: "center", padding:"30px", width: "10%"}}>Brazaletes</Link>
    
        
        <div style= {{position: "relative",  left: "30%"}}>
        <Link to="/carrito">
        <BsFillCartFill size="55px" color="black" />
        <span style= {{position: "absolute"}}>5</span>
        </Link>
        </div>
        
    </div>
)
}

export default Navbar