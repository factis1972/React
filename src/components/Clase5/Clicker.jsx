import { useEffect, useState } from "react"

const Cliker = () => {

    const [clic, setClic] = useState(0);

    useEffect(() => {
        document.title = `Hiciste ${clic} Clic`;
    }, [clic])

    return (
        <button  onClick={() => setClic(clic+1)}>
            Contador ({clic})
        </button>
    );
}
export default Cliker;