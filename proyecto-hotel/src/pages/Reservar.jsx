import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { habitaciones } from "@/data/habitaciones";
import { useAppContext } from "@/context/AppContext";

const Reservar = () => {
    const { selectedRoom, setSelectedRoom } = useAppContext();


    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1); // añadir un dia mas (para q sea mañana claro)




    const handleSubmit = (e) => {
        e.preventDefault()

        console.log({ checkIn, checkOut });
    }

    return (
        <>


            <div className="Booking-container">
                <h2 className="Booking-title">reserva tu experiencia en Six Senses Ibiza</h2>
                <form className="Booking-form" onSubmit={handleSubmit}>
                    <label className="Booking-label">nombre completo
                        <input className="Booking-input" type="text" name="name" required /></label>

                    <label className="Booking-label">email
                        <input className="Booking-input" type="email" name="email" required /></label>

                    <label className="Booking-label">tipo de habitación
                        <select
                            className="Booking-input"
                            value={selectedRoom || ''}
                            onChange={(e) => setSelectedRoom(e.target.value)}
                            required
                        >
                            <option value="">-- selecciona una habitación --</option>
                            {habitaciones.map(hab => (
                                <option key={hab.id} value={hab.id}>{hab.name}</option>
                            ))}
                        </select>
                    </label>
                    <label className="Booking-label">fecha de entrada
                        <DatePicker
                            minDate={today} selected={checkIn} onChange={setCheckIn} className="datepicker Booking-date" /></label>

                    <label className="Booking-label">fecha de salida
                        <DatePicker
                            minDate={today} selected={checkOut} onChange={setCheckOut} className="datepicker Booking-date" /></label>

                    <label className="Booking-label">personas
                        <input defaultValue={1} className="Booking-input" type="number" name="guests" min="1" max="10" required /></label>

                    <button className="Booking-btn" type="submit">reservar</button>
                </form>
            </div>

            <div className="Booking-info">
                <div className="Booking-infoTextos">

                    <h3>sobre el hotel</h3>
                    <p>
                        Six Senses Ibiza es un santuario en la costa norte de la isla, donde el lujo se encuentra con la sostenibilidad.
                        nuestro equipo está disponible todos los días y a todas horas para ayudarte con cualquier detalle de tu estancia.
                    </p>
                    <h3>contacto</h3>
                    <p>
                        📍 Cala Xarraca, Ibiza<br />
                        📞 +34 871 008 875<br />
                        ✉️ reservations-ibiza@sixsenses.com
                    </p>
                </div>
            </div>


        </>
    );
}

export default Reservar;