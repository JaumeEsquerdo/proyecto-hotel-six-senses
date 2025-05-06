import '@/css/home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (<>
    
    <div className="Home-img">
            <div className='Home-title'>
                <h1 className="Home-h1">Hotel Six Senses</h1>
                <h2 className="Home-h2"><i>Ibiza</i> </h2>
            </div>
            
            <Link to={'/reservar'}>reservar</Link>
    </div>

        </>);
}

export default Home;