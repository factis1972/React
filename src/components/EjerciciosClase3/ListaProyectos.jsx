import TarjetaProyecto from "./TarjetaProyecto";

const ListaProyectos = () => {
    const proy = [
        {titulo: "Plataforma de Gestión", descripcion: "Una herramienta para optimizar la gestión de equipos.", botonTexto:"Explorar proyecto"},
        {titulo: "Control de inventarios", descripcion: "Optimice su stock de productos.", botonTexto:"Saber más"},
        {titulo: "Cotización automatica", descripcion: "Envíe sus pedidos de cotización.", botonTexto:"Test rápido"}
    ];

    return(
        <div>
            {proy.map((tarjetaProyecto, index) => (
                <TarjetaProyecto key={index} proy={tarjetaProyecto} />
            ))}
        </div>
    );
}
export default ListaProyectos;

/*
import EquipoTalentoLab from "./EquipoTalentoLab";

const ListaEmpleados = () => {
    const equipo = [
        {nombre: "Silvia", rol: 'Product Owner', imagen: 'https://media.gq.com.mx/photos/67c606818b74f8e79bc487ac/master/w_1600,c_limit/Ferrari.jpg' },
        {nombre: "Luis", rol: 'Diseñador UX/UI', imagen: 'https://media.gq.com.mx/photos/67c60682919293616f46291c/master/w_1600,c_limit/Mercedes%20W16.jpg' },
        {nombre: "Matías", rol: 'Desarrollador', imagen: 'https://media.gq.com.mx/photos/67c60683e1319aab4c54dff9/master/w_1600,c_limit/Alpine.jpg' },
        {nombre: "Sabrina", rol: 'Desarrolladora', imagen: 'https://media.gq.com.mx/photos/67c606818b74f8e79bc487ac/master/w_1600,c_limit/Ferrari.jpg' },
    ];
    return(
        <div>
            {equipo.map((equipoTalentoLab, index) => (
                <EquipoTalentoLab key={index} equipo={equipoTalentoLab} />
            ))}
        </div>
    );
}
export default ListaEmpleados;
*/