import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
    const {id} = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(respuesta => respuesta.json())
        .then(dato => setProducto(dato));
    }, [id]);

    if(!producto)
        return <p>cargando...</p>
    
    return(
        <>
        <h2>Detalle del producto Nro.:  {id}</h2>
        <img src={producto.image} alt={producto.title} width={100} height={100} />
        <h3>{producto.title}</h3>
        <p>{producto.description}</p>
        </>
    )

}
export default DetalleProducto;
