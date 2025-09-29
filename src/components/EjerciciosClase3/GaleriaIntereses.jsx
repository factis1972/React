const GaleriaIntereses = ({index, intereses}) => {
    const {tema} = intereses;

    return(
        <div>
            <h3>{tema}</h3>
            <button>Conocer más</button>
        </div>
    );
}
export default GaleriaIntereses;
