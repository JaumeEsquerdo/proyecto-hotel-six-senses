import { instalaciones } from "@/data/instalaciones";

const Instalaciones = () => {
    return (

        <>
            <div className="GalleryInstalaciones">
                {instalaciones.map((inst, i) => (
                    <div key={inst.id} className={`GalleryInstalaciones-item ${inst.size} ${i % 2 === 0 ? 'left' : 'right'}`}>
                        <div className='ImageInstalaciones-container'>
                            <img className="ImageInstalaciones-default" src={inst.default} alt="img instalacion 1" />
                            <img className="ImageInstalaciones-hover" src={inst.hover} alt="img instalacion 2" />
                        </div>

                        <div className="Image-legend">
                            <span className="Legend-title">{inst.name} </span>
                            <p className="Legend-description">{inst.description} </p>

                        </div>
                    </div>

                ))}

            </div>
        </>
    );
}

export default Instalaciones;