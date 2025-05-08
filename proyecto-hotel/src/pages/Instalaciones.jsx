import { instalaciones } from "@/data/instalaciones";

const Instalaciones = () => {
    return (

        <>
            <div className="Gallery">
                {instalaciones.map((inst, i) => (
                    <div key={i} className={`Gallery-item ${inst.size} ${i % 2 === 0 ? 'left' : 'right'}`}>
                        <div className='Image-container'>
                            <img className="Image-default" src={inst.default} alt="img habitacion 1" />
                            <img className="Image-hover" src={inst.hover} alt="img habitacion 2" />
                        </div>

                        <div className="Image-legend">
                            <span>{inst.name} </span>
                            <span>no. {i + 1}</span>
                        </div>
                    </div>

                ))}

            </div>
        </>
    );
}

export default Instalaciones;