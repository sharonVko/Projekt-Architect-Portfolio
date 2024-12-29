import "./Gallery.css"


const Gallery = () => {
    return ( 
        <section className="gallery">
            <h2>Photo <br />
                <span>Gallery</span>
            </h2>
            <div className="gall-img__wrapper">
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=1" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=2" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=3" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=4" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=5" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=6" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=7" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=8" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=9" alt="random img" />
                </div>
                <div className="img-card">
                    <img src="https://picsum.photos/210/260?random=10" alt="random img" />
                </div>
            </div>
        </section>
     );
}
 
export default Gallery
