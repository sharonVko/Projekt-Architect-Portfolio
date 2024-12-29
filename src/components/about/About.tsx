import "./About.css"

const About = () => {
    return ( 
        <section className="about">
            <div>
                <img src="./IMGs/aboutImg1.png" alt="Building" />
                <img src="./IMGs/aboutImg2.png" alt="Building" />
            </div>
            <div className="center-img">
                <img src="./IMGs/aboutImg3.png" alt="Building" />
            </div>
            <div className="about-text">
                <h2>About</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>READ MORE  →</p>
            </div>
        </section>
     );
}
 
export default About;