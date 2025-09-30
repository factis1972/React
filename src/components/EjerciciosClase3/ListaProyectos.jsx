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
