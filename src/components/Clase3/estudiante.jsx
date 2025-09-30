import Boton from "./boton";

const Estudiante = ({datosEstudiantes}) => {
    const {nombre, edad} = datosEstudiantes;
    return(
        <div>
            <h3>Nombre: {nombre}, Edad: {edad}</h3>
            <Boton />
        </div>
    );
}

export default Estudiante;