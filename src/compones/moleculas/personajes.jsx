import "../../assets/styles/personaje.css"

function Personajes({img, name}) {


    return ( 
        <div className="img2">
            <img src={img} alt={name} />
            <div>
                <span>
                    {name}
                </span>
            </div>
        </div>
        
     );
}

export default Personajes;