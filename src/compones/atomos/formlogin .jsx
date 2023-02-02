
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo1.png'
import "../../assets/styles/LoginForm.css"
import "../../assets/styles/FormAlta.css"




function FormLogin() {
    const [stateForm, setStateForm] = useState({username:'', password:''})
     const handlerClick = (e) => {
       // setDescription({msn: username})    
    }
    const handlerChange = (e) => {
        console.log(stateForm.username)
        setStateForm({...stateForm,username:e.target.value})
        console.log(stateForm.username)
    }
    const handlerChangePassword = (e) => {
        setStateForm({...stateForm,password: e.target.value})
    }
    // const handlerClick = (e) => {
    // e.preventDefault();
    // const formData = new FormData(formDataL.current);
    // let URI = "http://34.225.239.102/api/iniciar";
    // let option = {
    // method: "GET",
    // headers: {
    // "Content-Type": "application/json",
    // },
    // body: JSON.stringify({
    // usuario: formData.get("username"),
    // clave: formData.get("clave"),
    // }),
    // }

    return ( 
        <>
                <div id='Supe'>
                <div className='form'>
                <form action="" >
                <img src={Logo} className="img"  />
                <div>
                <input type="text" className='input' placeholder='Usuario' username="username" value={stateForm.username} onChange={handlerChange} />
                <input type="password" className='input' placeholder='Contraseña' clave="clave" value ={stateForm.password} onChange={handlerChangePassword} />
                </div>
                <Link to="/AltaAutobus">
                <button onClick={handlerClick} className="bt1" >Inicio de sesion</button>
                </Link>
                <Link to="/Register">
                    <button className="bt1" >Registrarse</button>
                </Link>
                <div>
                    <label >{JSON.stringify(stateForm)}</label>
                </div>
                </form>
        </div>
        </div>
        </>
    );
    }

export default FormLogin;