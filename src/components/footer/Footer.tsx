import Logo from "../../assets/SVG/Logo";
import"./Footer.css"

const Footer = () => {
    return ( 

        <footer>
            <div><Logo/></div>
            <div>
                <h4>Information</h4>
                <a href="#">Main</a>
                <a href="#">Gallery</a>
                <a href="#">Projects</a>
                <a href="#">Certifications</a>
                <a href="#">Contacts</a>
            </div>
            <div>
                <h4>Contacts</h4>
                <div>
                    <p>1234 Sample Street
                    Austin Texas 78704</p>
                </div>
                <div>
                    <p>512.333.2222</p>
                </div>
                <div>
                    <p>sampleemail@gmail.com</p>
                </div>
            </div>
            <div>
                <h4>Social Media</h4>
                <div></div>
            </div>
        </footer>
     );
}
 
export default Footer;