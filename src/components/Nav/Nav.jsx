import './Nav.css';
import { useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from 'uuid';


const NavLinks = [
    {
        endpoint: '/',
        name: 'hem'
    },
    {
        endpoint: '/projects',
        name: 'projekt'
    },
    {
        endpoint: '/about',
        name: 'om mig'
    },
    {
        endpoint: '/contact',
        name: 'kontakt'
    },

]

const Nav = () => {

    const elementRef = useRef(null);
    const { pathname } = useLocation();

    const liElement = ({endpoint, name}) => <li key={uuid()}><Link className={`internal-link ${pathname === endpoint ? 'nav-current' : ''}`} to={endpoint}>{name}</Link></li>; 
    const links = NavLinks.map( link => liElement(link));

    
    let scrollLocation = 0;
    let scrollDecider = 0;
    onscroll = () => {
        
        const comparitor = Math.floor(scrollLocation) - Math.floor(scrollDecider);
    
        // SCROLLED UP
        if( comparitor <= -50) {
            window.requestAnimationFrame(() =>elementRef['current'].classList.remove( 'hiddenNav'));
            scrollDecider = scrollLocation;
        }

        //SCROLLED DOWN
        if( comparitor >= 50) {
            window.requestAnimationFrame(()=>elementRef['current'].classList.add( 'hiddenNav'));
            scrollDecider = scrollLocation;
        }

        scrollLocation = window.scrollY;
    }
    onresize = () => elementRef['current'].classList.remove( 'hiddenNav')
    
    return (
        <nav ref={elementRef}>
            <ul>{links}</ul>
        </nav>
    )

}

export default Nav;
