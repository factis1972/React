const TarjetaProyecto = ({index, proy}) => {
    const {titulo, descripcion, botonTexto} = proy;
    const handleClick = () =>{
        alert('Elegiste el proyecto: ', {titulo});
        console.log('Explorando: ', {titulo});
    }

    return (
        <div>
            <h2> Título: {titulo}, Descripción: {descripcion}</h2>
            <button onClick={handleClick}>{botonTexto}</button>
        </div>
    );
}
export default TarjetaProyecto;
