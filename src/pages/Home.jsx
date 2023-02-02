import Header from "../compones/atomos/header";
import { Link } from "react-router-dom";
import "../assets/styles/home.css"

function  Home(){
    return(
        <div >
                <Header></Header>
                <div className="ini" >
                <button className="bt1" >
            <Link to="/Login" >
            Iniciar Sesion</Link>
            </button>
            <button className="bt1">
            <Link to="/AltaAutobus"> Alta de Autobuces</Link>
            </button>
            
                </div>
                

        
        </div>


        
    )
}
export default Home;