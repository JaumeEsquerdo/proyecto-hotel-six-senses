import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';


const Reservar = () => {

    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({ checkIn, checkOut })
    }

    return (

        <div className="Booking-container">
            <h2 className="Booking-title">reserva tu experiencia en Six Senses Ibiza</h2>
            <form className="Booking-form" onSubmit={handleSubmit}>
                <label>nombre completo
                <input type="text" name="name" required /></label>

                <label>email
                <input type="email" name="email" required /></label>

                <label>fecha de entrada
                <DatePicker selected={checkIn} onChange={setCheckIn} className="datepicker" /></label>

                <label>fecha de salida
                <DatePicker selected={checkOut} onChange={setCheckOut} className="datepicker" /></label>

                <label>personas
                <input type="number" name="guests" min="1" max="10" required /></label>

                <button type="submit">reservar</button>
            </form>

            <div className="Booking-info">
                <h3>sobre el hotel</h3>
                <p>
                    Six Senses Ibiza es un santuario en la costa norte de la isla, donde el lujo se encuentra con la sostenibilidad.
                    nuestro equipo está disponible todos los días de 9:00 a 21:00 para ayudarte con cualquier detalle de tu estancia.
                </p>
                <p>
                    📍 Cala Xarraca, Ibiza<br />
                    📞 +34 871 008 875<br />
                    ✉️ reservations-ibiza@sixsenses.com
                </p>
            </div>

        </div>
    );
}

export default Reservar;