import "./footer.css"

const Footer = ()=>{
    return (
        <>
            <div className="footer">
                <div className="footer_top">
                    <div className="column">
                        <h2><a href="../index.htnl">Exclusive</a></h2>
                        <h3>Subscribe</h3>
                        <p>Get 10% off your first order</p>
                        <input type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="column">
                        <h3>Support</h3>
                        <a href="https://maps.app.goo.gl/qCuvfHkzCayyu8xn8">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</a>
                        <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
                        <a href="telto:+88015-88888-9999">+88015-88888-9999</a>
                    </div>
                    <div className="column">
                        <h3>Account</h3>
                        <ul>
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Quick Link</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h3>Download App</h3>
                        <div className="box">
                            <span>Save $3 with App New User Only</span>
                            <div className="image">
                                <div className="image1"></div>
                                <div className="image_box">
                                    <div className="image2"></div>
                                    <div className="image3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="icons_footer">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p>Copyright Rimel 2022. All right reserved</p>
                </div>
        </div>    
        </>
    )
}

export default Footer