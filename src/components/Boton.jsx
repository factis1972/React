const Boton = () => {
    const handleClick = () =>{
        alert('¡Botón Clickeado!');
    }
    return (
        <button onClick={handleClick}>Clickear</button>
    )
}

export default Boton;
