import{ Link } from "react-router-dom";
import logo from './logo.png';
import styles from './Cabecalho.module.css';
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho () {

    return(

        <header className={styles.cabecalho}>
            
            <div>
                <Link to="./">
                <img src={logo} alt="logo cinetag"></img>
                </Link>

            </div>

            <nav>
                
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>  
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>      
            </nav>

        </header>
    )
}

export default Cabecalho; 

