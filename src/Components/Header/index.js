import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/" className='link'>Início</Link>
                <Link to="/personagens" className='link'>Personagens</Link>
                <Link to="/sobre" className='link'>Sobre</Link>
            </nav>
        </header>
    );
}
export default Header;