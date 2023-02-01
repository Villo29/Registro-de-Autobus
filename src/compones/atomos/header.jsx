import logo from "../../assets/react.svg"
import '../../assets/styles/Header.css'
function Header() {
    return (  
        <header>
            <img src={logo} alt="logo de empresa" />
            <h1>Progamacion Web </h1>
        </header>
    );
}

export default Header;