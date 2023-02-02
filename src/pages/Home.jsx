import Header from "../compones/atomos/header";
import { Link } from "react-router-dom";
import "../assets/styles/home.css"

function  Home(){
    return(
        <div >
                <Header></Header>
                <div className="ini" >
                <button >
            <Link to="/Login" >
            Iniciar Sesion</Link>
            </button>
            <button>
            <Link to="/AltaAutobus"> Alta de Autobuces</Link>
            </button>
            
                </div>
                

        
        </div>


        
    )
}
export default Home;