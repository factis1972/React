import Estudiante from "./Estudiante";

const ListaEstudiantes = () => {
    const datosEstudiantes = [
        {nombre: "Sgaribaldi", edad: 32},
        {nombre: "Jayala", edad: 31},
        {nombre: "Jsilva", edad: 53}
    ];
    return (
        <div>
            {datosEstudiantes.map((estudiante, index) => (
                <Estudiante key={index} datosEstudiantes={estudiante} />
            ))}
        </div>
    );
}

export default ListaEstudiantes;
