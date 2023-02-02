import { useRef } from "react";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/logo1.png'



function Alta() {
    const [selectedOption, setSelectedOption] = useState("Turismo");
    const [license, setLicense] = useState(Math.floor(Math.random() * 2002));
    function handleChange(event) {
    setSelectedOption(event.target.value);
    }
    const navigate = useNavigate();
    const formDataF = useRef();
    const handlerClick = (e) => {
    e.preventDefault();
    const formData = new FormData(formDataF.current);
    let URI = "http://34.225.239.102/api/autobus/register";
    let options = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        clave: formData.get("clave"),
        placa: formData.get("placa"),
        numasientos: formData.get("asientos"),
        fecha: formData.get("fecha"),
        tipo: formData.get("tipo"),
        nombre: formData.get("chofer"),
        licencia: license,
    }),
    };
    console.log(options.body)
    fetch(URI, options)
    .then((response) => response.json())
    .then((data) => {
        alert(JSON.stringify(data));
    });
    };
    return (
    <div className="formPadre">
    <div className="formBus">
        <div className="img">
        <img src={Logo} alt="Logo" height="100px" />
        </div>
        <form ref={formDataF}>
            <div className="inputarri">
            <label className="cap" htmlFor="clave"> Clave autobus
            </label>
            <input type="text" id="clave" name="clave" className="input" />{" "}
            <label className="cap" htmlFor="placa">Placa
            </label>
            <input type="text" id="placa" name="placa" className="input" />{" "}
            </div>
            <div className="inputarri">
            <label className="cap" htmlFor="asientos">Numero de Asientos
            </label>
            <input
                type="number" id="asientos" name="asientos" className="input"/>
            <label className="cap">Fecha de Alta
                <input type="Date" id="fecha" name="fecha" className="input" />
            </label>
            </div>
            <div className="inputaba">
            <label className="cap" htmlFor="tipo"> Tipo
            <select value={selectedOption} onChange={handleChange} id="tipo" name="tipo" className="input">
            <option value="Turismo">Turismo</option>
            <option value="Lujo">Lujo</option>
            </select>
            </label>
            <label className="cap"> Nombre del chofer
            <input type="text" id="chofer" name="chofer" className="input" />
            </label>
            <label className="cap" id="licencia"> Número de licencia:
            <input name="licencia" value={license} disabled className="input"></input>
            </label>
        </div>
        <div className="boton">
                <Link to="/">
                <button onClick={handlerClick}>Registro</button>
                </Link>
        </div>
        </form>
    </div>
    </div>
);
}

export default Alta;
