import { useState } from "react";

//Crear contexto
export const CarritoContext = createContext();

//Proveedor del contexto
export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([... carrito, producto]);
    };

    //Uso filter() para crear un nuevo array excluyendo el elemento (ID) eliminado
    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
      };
    
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito}}>
            { children}
        </CarritoContext.Provider>
    );
}

export default Carrito;