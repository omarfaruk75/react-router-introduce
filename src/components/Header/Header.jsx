
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/users"}>Users</Link>
                <Link to={"/contact"}>Contact</Link>

            </nav>
        </div>
    );
};

export default Header;