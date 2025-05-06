import { useAppContext } from '@/context/AppContext'

import GeneralNav from "@/components/GeneralNav";
import { useHeaderTitle } from '@/hooks/HeaderTitle';


const Habitaciones = () => {

    const headerTitle = useHeaderTitle();


    return (

        <>
            <header className="Header">
                <div className="Header-title">
                    <h1 className="Header-title--h1">Hotel Six Senses</h1>
                    <h2 className="Header-title--h2"><i>Ibiza</i></h2>
                </div>

                <h3 className='Header-title--h3'>{headerTitle}</h3>

                
                <GeneralNav />
            </header>

        </>
    );
}

export default Habitaciones;