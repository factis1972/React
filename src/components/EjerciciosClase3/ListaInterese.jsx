import GaleriaIntereses from "./GaleriaIntereses";

const ListaIntereses = () => {
    const intereses = [
        {tema: "Ecología"},
        {tema: "Reciclaje"},
        {tema: "Flora y Fauna"}
    ];

    return(
        <div>
            {intereses.map((galeriaIntereses, index) => (
                <GaleriaIntereses key={index} intereses={galeriaIntereses} />
            ))}
        </div>

    );
}
export default ListaIntereses;