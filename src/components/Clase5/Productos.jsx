import { useEffect, useState } from "react";

const Productos = () => {

    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://68d5d31de29051d1c0afa93e.mockapi.io/productos')
        .then(respuesta => respuesta.json())
        .then(datos => {
            setProducto(datos);
            setCargando(false)
        })
        .catch(error => {
            setError('Error al cargar los productos');
            setCargando(false);
        })
    },[]);
    
    if (cargando)
        return <p>Estamos cargando sus productos</p>

    if (error)
        return <p>{error}</p>

    return(
        <>
        <h2>PRODUCTOS</h2>
        <ul>
            {producto.map(producto => (
                <li key={producto.id}>Producto: {producto.nombre} = Precio: {producto.precio}$</li>
            ))}
        </ul>
        </>
    )
}

export default Productos;
