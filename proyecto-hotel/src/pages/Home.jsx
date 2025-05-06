import '@/css/home.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Home = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); //abrir / cerrar menu
    /* para el hover podria usar onMouseEnter y onMouseLeave */

    return (<>

        <div className="Home-img">
            <div className='Home-title'>
                <h1 className="Home-h1">Hotel Six Senses</h1>
                <h2 className="Home-h2"><i>Ibiza</i> </h2>
            </div>

            <div className='Home-nav'>
                <div className='Home-menu'

                >
                    <span className='Home-link Home-link--arrow'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >menú <span class={`material-symbols-outlined ${!isMenuOpen ? 'cerrado' : ''}`}>
                            straight
                        </span></span>

                    {isMenuOpen &&
                        (
                            <div className='Home-submenu'>
                                <Link className='Home-link'>habitaciones</Link>
                                <Link className='Home-link'>instalaciones</Link>

                            </div>
                        )
                    }

                </div>

                <Link className='Home-link' to={'/reservar'}>reservar</Link>
            </div>

        </div>

    </>);
}

export default Home;