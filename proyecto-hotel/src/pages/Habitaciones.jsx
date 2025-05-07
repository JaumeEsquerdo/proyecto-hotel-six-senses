import { Link } from "react-router-dom";
import { habitaciones } from "@/data/habitaciones";


const Habitaciones = () => {

    // const images = [
    //     { name: ' habitación cave royale', default: '/imgs/habitaciones/cave-royal.webp', hover: '/imgs/habitaciones/cave-royal-2.webp', size: 'tall' },
    //     { name: 'habitación royale', default: '/imgs/habitaciones/hab-deluxe-2.webp', hover: '/imgs/habitaciones/hab-deluxe.webp', size: 'wide' },
    //     { name: 'habitación sea scape room', default: '/imgs/habitaciones/sea-scape-room.webp', hover: '/imgs/habitaciones/sea-scape-room-2.webp', size: 'medium' },
    //     { name: 'habitación sea view junior', default: '/imgs/habitaciones/sea-view-junior-2.webp', hover: '/imgs/habitaciones/sea-view-junior.webp', size: 'tall' },
    //     { name: 'habitación ten mansion', default: '/imgs/habitaciones/ten-mansion-2.webp', hover: '/imgs/habitaciones/ten-mansion.webp', size: 'wide' },
    //     { name: 'habitación xarraca room', default: '/imgs/habitaciones/xarraca-room-2.webp', hover: '/imgs/habitaciones/xarraca-room.webp', size: 'medium' },
    // ]


    return (

        <>
            <div className="Gallery">
                {habitaciones.map((hab, i) => (
                    <Link key={hab.id}
                    to={`/habitaciones/${hab.id}`}>

                        <div key={i} className={`Gallery-item ${hab.size} ${i % 2 === 0 ? 'left' : 'right'}`}>
                            <div className='Image-container'>
                                <img className="Image-default" src={hab.default} alt="img habitacion 1" />
                                <img className="Image-hover" src={hab.hover} alt="img habitacion 2" />
                            </div>

                            <div className="Image-legend">
                                <span>{hab.name} </span>
                                <span>no. {i + 1}</span>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>

        </>
    );
}

export default Habitaciones;