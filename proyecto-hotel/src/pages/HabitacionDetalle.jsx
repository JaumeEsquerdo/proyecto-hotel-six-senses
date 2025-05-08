import { useParams } from "react-router-dom";
import { habitaciones } from "@/data/habitaciones";
import { useEffect } from "react";

/* useParams para obtener los datos dinamicos de la url */
const HabitacionDetalles = () => {

    const { id } = useParams();
    const habitacion = habitaciones.find(h => h.id === id)

    /* reset de scroll para cuando entre en una hab individual no este el scroll bajo */ 
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    if (!habitacion) return <p>Habitación no encontrada</p>
    return (
        <div className="HabitacionDetalle">


            <div className="HabitacionDetalle-images">
                <img className="HabitacionDetalle-image" src={habitacion.default} alt={`${habitacion.name} `} />
                <img className="HabitacionDetalle-image" src={habitacion.hover} alt={`${habitacion.name} `} />
            </div>


            <div className="HabitacionDetalle-caracteristicas">
                <div className="HabitacionDetalle-textos">

                    <div className="HabitacionDetalle-detalle">
                        <h2 className="HabitacionDetalle-titulo HabitacionDetalle-nombre">{habitacion.name}</h2>
                        <p className="HabitacionDetalle-titulo">{habitacion.description}</p>
                    </div>

                    <div className="HabitacionDetalle-detalle">
                        <p className="HabitacionDetalle-titulo">datos clave</p>
                        <p className="HabitacionDetalle-titulo">{habitacion.datos}</p>
                    </div>

                    <div className="HabitacionDetalle-detalle">
                        <p className="HabitacionDetalle-titulo">servicios</p>
                        <ul className="HabitacionDetalle-ul">
                            {habitacion.servicios.map((serv, i) => (
                                <li key={i} className="HabitacionDetalle-li">{serv}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default HabitacionDetalles;