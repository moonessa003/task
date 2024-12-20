import "./Top.css"

const Top= ()=>{
    return (
        <>
            <div className="top">
            <div className="top_center"> 
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="#">ShopNow</a>
            </div>
            <div className="top_right">
                <select name="lang" id="lang">
                    <option value="eng">English</option>
                    <option value="rus">Russian</option>
                    <option value="uzb">Uzbek</option>
                </select>
            </div>
            </div>
        </>
    )
}
export const Navbar =()=>{
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <h1><a href="../index.html">Exclusive</a></h1>
                    </div>
                    <div className="menu">
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                        <a href="#">About</a>
                        <a href="#">Sign Up</a>
                    </div>
                    <div className="search">
                        <input type="search" placeholder="What are you looking for?"/>
                        <div className="icons_top">
                            <a href="#"><i className="fa-regular fa-heart"></i></a>
                            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                            <a href="#"><i className="fa-regular fa-user"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Top;