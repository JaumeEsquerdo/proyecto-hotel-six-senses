
import GeneralNav from "@/components/GeneralNav";
import { useHeaderTitle } from "@/hooks/HeaderTitle";


const Header = () => {

    const headerTitle  = useHeaderTitle();

    return (

        <header className="Header">
            <div className="Header-title">
                <h1 className="Header-title--h1 Header-principal">Hotel Six Senses</h1>
                <h2 className="Header-title--h2 Header-secundario"><i>Ibiza</i></h2>
            </div>

            <h3 className='Header-title--h3'>{headerTitle}</h3>


            <GeneralNav />
        </header>
    );
}

export default Header;