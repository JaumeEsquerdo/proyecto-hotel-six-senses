import { useParams } from "react-router-dom";
import { habitaciones } from "@/data/habitaciones";

/* useParams para obtener los datos dinamicos de la url */
const HabitacionDetalles = () => {

    const { id } = useParams();
    const habitacion = habitaciones.find(h => h.id === id)

    if (!habitacion) return <p>Habitación no encontrada</p>
    return (
        <div className="HabitacionDetalle">


            <div className="HabitacionDetalle-images">
                <img className="HabitacionDetalle-image" src={habitacion.default} alt={`${habitacion.name} `} />
                <img className="HabitacionDetalle-image" src={habitacion.hover} alt={`${habitacion.name} `} />
            </div>
            <div className="HabitacionDetalle-caracteristicas">
                <div className="HabitacionDetalle-textos">
                    <h2 className="HabitacionDetalle-h2">{habitacion.name}</h2>
                    <p>{habitacion.description}</p>
                </div>
            </div>


        </div>
    );
}

export default HabitacionDetalles;