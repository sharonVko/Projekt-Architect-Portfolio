import FacebookIcon from "../../assets/SVG/FacebookIcon";
import LinkedInIcon from "../../assets/SVG/LinkedInIcon";
import PinterestIcon from "../../assets/SVG/PinterestIcon";
import TwitterIcon from "../../assets/SVG/TwitterIcon";
import FooterLogo from "../../assets/SVG/FooterLogo.svg"
import"./Footer.css"

const Footer = () => {
    return ( 
        <>
        <footer>
            <div><img src={FooterLogo} alt="Logo" /></div>
            <div className="info-wrapper">
                <h4>Information</h4>
                <a href="#">Main</a>
                <a href="#">Gallery</a>
                <a href="#">Projects</a>
                <a href="#">Certifications</a>
                <a href="#">Contacts</a>
            </div>
            <div className="contacts-wrapper">
                <h4>Contacts</h4>
            
                    <p>1234 Sample Street <br />
                    Austin Texas 78704</p>
                    <p>512.333.2222</p>
                    <p>sampleemail@gmail.com</p>
                
            </div>
            <div>
                <h4>Social Media</h4>
                <div className="social-icons__wrapper">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    <PinterestIcon/>
                </div>
            </div>
        </footer>
        <hr />
            <p className="copyright">© 2024 All Rights Reserved</p>
        </>
     );
}
 
export default Footer;