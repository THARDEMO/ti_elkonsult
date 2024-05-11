import './Nav.css';
import { Link } from "react-router-dom"

const Nav = () => {
 
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                    <Link to="/projects">PROJECTS</Link>
                </li>
            </ul>


        </nav>
    )

}

export default Nav;