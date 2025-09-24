import MiniBoton from "./MiniBoton";

const Boton = () => {
    const handleClick = () =>{
        alert('¡Botón Clickeado!');
    }
    return (
        <>
            <MiniBoton />
            <button onClick={handleClick}>Clickear</button>
        </>
    )
}

export default Boton;
