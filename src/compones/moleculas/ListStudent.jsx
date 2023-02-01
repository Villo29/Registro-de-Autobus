import Title from "../atomos/Title";
import Widge from "../atomos/Widge";

function ListStudent({listStudent}) {
    return ( 
        <>
        <Title msn= "Lista de Alumnos 4B"></Title>
        {
            listStudent.map(itemStudent =>(
                <Widge item={itemStudent}></Widge>
            )
            )
        }
        </>
     );
}

export default ListStudent;