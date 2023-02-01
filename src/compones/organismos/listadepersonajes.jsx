import { useState } from "react";
import Personajes from "../moleculas/personajes";
import "../../assets/styles/personaje.css"

function ListadePersonaje() {
    const[characters,setCharacter] = useState([])
    const handlerClick = (e) => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data =>{
            console.log(data)
            setCharacter(data.results)
        })
    }

    return (  
        <>
        <div>
        <h2 >Lista de Personajes</h2>
        <button onClick={handlerClick}> Mostrar Personaje</button>
        <div className="Persona" >
            {characters.map( character => 
            <Personajes img={character.image} 
            name={character.name} /> )}
        </div>
        </div>
        
        </>
        
    )
}

export default ListadePersonaje;