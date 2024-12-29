import "./ContactUs.css"

const ContactUs = () => {
    return ( 
        <section className="contact-us__section">
            <h2>Contact Us</h2>
            <div className="contact-wrapper">
                <form>
                   <input type="text" name="" id="" placeholder="Name" /> 
                   <input type="number" name="" id="" placeholder="Phone Number " required/>
                   <input type="email" name="" id="" placeholder="E-mail" required />
                   <input type="text" name="" id="" placeholder="Interested in"/>
                   <input type="text" name="" id="" placeholder="Message" required className="message-box"/>
                </form>
                <img src="/IMGs/contactUsImg.png" alt="Man with phone" />
            </div>
            <button type="button">SEND EMAIL →</button>
        </section>
     );
}
 
export default ContactUs;