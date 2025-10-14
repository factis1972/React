import styles from './EquipoTalentoLab.module.css';

const EquipoTalentoLab = ({index, equipo}) => {
    const {nombre, rol, imagen} = equipo;
    return(
        <div className={styles.empleado}>
            <img key={index} src={imagen} style={{ width: "150px", height: "150px" }}></img> 
            <h3>Nombre: {nombre}, Rol: {rol}</h3>
        </div>
    );
}
export default EquipoTalentoLab;

