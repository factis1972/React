import { useState } from "react";

const Carrito = () => {
    const listaProdutos = [
        {id: 1, nombre: 'Tomates', precio: '1530'},
        {id: 2, nombre: 'Leche', precio: '1350'},
        {id: 3, nombre: 'Galletitas', precio: '1008'},
        {id: 4, nombre: 'Algodón', precio: '2560'},
        {id: 5, nombre: 'Detergente', precio: '3056'}
    ];

    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (producto) =>{
        setCarrito([...carrito, producto]);
    }

    const vaciarCarrito = () =>{
        setCarrito([]);
    }

    return(
        <div>
            <h2>Produtos</h2>
            <ul>
                {listaProdutos.map(producto =>
                    <li key={producto.id}>
                        {producto.nombre}:
                        {producto.precio}$
                        <button onClick={() => agregarCarrito(producto)}>Agregar al Carrito</button>
                    </li>
                )}
            </ul>
            <table>
                <tr>
                    <td>
                        <h2>Carrito</h2>
                    </td>
                    <td>
                        <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    </td>
                </tr>
                <tr>   
                    {carrito.map(producto =>
                            <p>
                                {producto.nombre}:
                                {producto.precio}$
                            </p>
                        )}
                </tr>
            </table>       
        </div>
    );
}
export default Carrito;
