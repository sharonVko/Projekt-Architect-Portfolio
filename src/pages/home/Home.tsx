import About from "../../components/about/About";
import ContactUs from "../../components/contactUs/ContactUs";
import Hero from "../../components/hero/Hero";
import MainFocus from "../../components/mainFocus/MainFocus";
import OurProjects from "../../components/ourProjects/OurProjects";
import "./Home.css"

const Home = () => {
    return (  
        <section>
            <Hero/>
            <About/>
            <MainFocus/>
            <OurProjects/>
            <ContactUs/>
        </section>
    );
}
 
export default Home;