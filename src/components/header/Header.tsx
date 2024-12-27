import { NavLink } from "react-router-dom";
import Logo from "../../assets/SVG/Logo";
import DarkMode from "../darkMode/DarkMode";
import "./Header.css"

const Header = () => {
    return ( 
        <header>
            <nav>
                
                    <Logo/>
                
                <div>
                <NavLink to={'/'}>MAIN</NavLink>
                <NavLink to={'/gallery'}>GALLERY</NavLink>
                <NavLink to={'/projects'}>PROJECTS</NavLink>
                <NavLink to={'/certifications'}>CERTIFICATIONS</NavLink>
                <NavLink to={'/contacts'}>CONTACTS</NavLink>
           <DarkMode/>
           </div>
            </nav>
        </header>
     );
}
 
export default Header;