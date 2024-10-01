import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/" className='link'>Início</Link>
                <Link to="/sobre" className='link'>Sobre</Link>
                <Link to="/docs" className='link'>Docs</Link>
            </nav>
        </header>
    );
}
export default Header;