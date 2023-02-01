
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/devil68-svg.svg'
import "../../assets/styles/LoginForm.css"




function FormLogin() {
    //let description = " Componente prencentacional"
    const [stateForm, setStateForm] = useState({username:'', password:''})
    const handlerClick = (e) => {
        e.preventDefault()
        setDescription({msn: username})    
    }
    const handlerChange = (e) => {
        console.log(stateForm.username)
        setStateForm({...stateForm,username:e.target.value})
        console.log(stateForm.username)
    }
    const handlerChangePassword = (e) => {
        setStateForm({...stateForm,password: e.target.value})
    }
    return ( 
        <>
                <div id='Supe'>
                <div className='form'>
                <form action="" >
                <img src={Logo}  width="54" height="60" />
                <div>
                <input type="text" className='input' placeholder='Usuario' value={stateForm.username} onChange={handlerChange} />
                <input type="text" className='input' placeholder='Contraseña' value ={stateForm.password} onChange={handlerChangePassword} />
                </div>
                <button onClick={handlerClick} className="buton" >Inicio de sesion</button>

                <Link to="/Register">
                    <button className="buton" >Registrarse</button>
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