import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import Logo from '../../assets/logo1.png'
import "../../assets/styles/Register.css"


function FormRegister() {
    const name = useRef()
    const username= useRef()
    const email= useRef()
    const password = useRef()
    const form = useRef()
    const navigate = useNavigate
    const handlerclick = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        alert("Nombre: " + newForm.get('name') + '\n' + "Usuario: "   + newForm.get(username) + '\n' + "Contraseña: " + newForm.get(password) )
        navigate("/")
    }
    return ( 
        <>
            <div className="cuadro">
            <form ref={form}>
            <img src={Logo} className="logo1"/>
            <label htmlFor="name">Nombre</label>
            <input type="text" className='input' ref={name} id="name" name="name" / >
            <label>Usuario
            <input type="text" className='input' ref={username} username="username" />
            </label>
            <label htmlFor="email">Email
            <input type="text" className="input" ref={email} email="email" />
            </label>
            <label>Contraseña
            <input type="password"  className='input' ref={password} password="password" />
            </label>
            <Link to="/">
            <button onClick={handlerclick}>Registro</button>
            </Link>
            </form>
            </div>
            
        </>
    );
}
export default FormRegister;