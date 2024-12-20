import "./profiles.css"

const Profiles = ()=>{
    return (
        <>
            <div className="profiles">
                <div className="container">
                    <div className="profile">
                        <div className="image_box">
                            <div className="image1"></div>
                        </div>
                        <div className="text">
                            <h3>Tom Cruise</h3>
                            <span>Founder & Chairman</span>
                            <div className="icons_profile">
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="image_box">
                            <div className="image2"></div>
                        </div>
                        <div className="text">
                            <h3>Emma Watson</h3>
                            <span>Managing Director</span>
                            <div className="icons_profile">
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                    <div className="profile">
                        <div className="image_box">
                            <div className="image3"></div>
                        </div>
                        <div className="text">
                            <h3>Will Smith</h3>
                            <span>Product Designer</span>
                            <div className="icons_profile">
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Profiles