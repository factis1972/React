import { useState } from "react";

const BotonContador = () => {

    const [contador, setContador] = useState(0);

    return (
        <div>
            <h4>{contador}</h4>
            <button onClick={() => setContador(contador+1)}>
                Sumar
            </button>
            <button onClick={() => setContador(contador-1)}>
                Restar
            </button>
            <button onClick={() => setContador(0)}>
                Resetear
            </button>

        </div>

    );
}
export default BotonContador;
