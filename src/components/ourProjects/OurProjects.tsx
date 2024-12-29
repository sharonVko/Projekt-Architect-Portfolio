import "./OurProjects.css"

const OurProjects = () => {
    return (  
        <section className="our-projects">
            <h2>Our Projects</h2>
            <div className="row-one">
            <div className="project-img1">
               {/*  <img src="./IMGs/our-pro-img1.png" alt="Building" /> */}
               <h3>Sample
                    <br />
                    Project
               </h3>
               <p>VIEW MORE  →</p>
            </div>
            <div>
                <img src="./IMGs/our-pro-img2.png" alt="Building" />
            </div>
            </div>
            <div>
                <img src="./IMGs/our-pro-img3.png" alt="Building" />
                <img src="./IMGs/our-pro-img4.png" alt="Building" />
                <img src="./IMGs/our-pro-img5.png" alt="Building" />
            </div>
            <button type="button">ALL PROJECTS → </button>
        </section>
    );
}
 
export default OurProjects;
