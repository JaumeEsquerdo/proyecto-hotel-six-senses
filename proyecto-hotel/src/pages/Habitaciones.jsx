


const Habitaciones = () => {

    const images = [
        { name: ' habitación cave royale', default: '/imgs/habitaciones/cave-royal.webp', hover: '/imgs/habitaciones/cave-royal-2.webp', size: 'tall' },
        { name: 'habitación royale', default: '/imgs/habitaciones/hab-deluxe-2.webp', hover: '/imgs/habitaciones/hab-deluxe.webp', size: 'wide' },
        { name: 'habitación sea scape room', default: '/imgs/habitaciones/sea-scape-room.webp', hover: '/imgs/habitaciones/sea-scape-room-2.webp', size: 'medium' },
        { name: 'habitación sea view junior', default: '/imgs/habitaciones/sea-view-junior-2.webp', hover: '/imgs/habitaciones/sea-view-junior.webp', size: 'tall' },
        { name: 'habitación ten mansion', default: '/imgs/habitaciones/ten-mansion-2.webp', hover: '/imgs/habitaciones/ten-mansion.webp', size: 'wide' },
        { name: 'habitación xarraca room', default: '/imgs/habitaciones/xarraca-room-2.webp', hover: '/imgs/habitaciones/xarraca-room.webp', size: 'medium' },


    ]


    return (

        <>
            <div className="Gallery">
                {images.map((img, i) => (
                    <div key={i} className={`Gallery-item ${img.size} ${i % 2 === 0? 'left' : 'right'}`}>
                        <div className='Image-container'>
                            <img className="Image-default" src={img.default} alt="img habitacion 1" />
                            <img className="Image-hover" src={img.hover} alt="img habitacion 2" />
                        </div>

                        <div className="Image-legend">
                            <span>{img.name} </span>
                            <span>no. {i + 1}</span>
                        </div>
                    </div>
                ))}

            </div>

        </>
    );
}

export default Habitaciones;