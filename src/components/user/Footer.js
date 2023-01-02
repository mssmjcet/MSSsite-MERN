import "./../../assets/css/footer.css";

const Footer=()=>{
    return(
        <div className="footer container-fluid">
            <div></div>
            <footer>
            <div className="main-content">
                <div className="left box">
                <h2>About us</h2>
                <div className="content">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dumm. when
                    an unknown printer took a galley of type and scrambled it to make
                    a type.
                    </p>
                    <div className="social">
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                </div>

                <div className="center box">
                <h2>Address</h2>
                <div className="content">
                    <div className="place">
                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                    <span className="text">Muffakham Jah College </span>
                    </div>
                    <div className="phone">
                    <i className="fa-solid fa-phone"></i>
                    <span className="text">+119-765432100</span>
                    </div>
                    <div className="email">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="text">xyz@example.com</span>
                    </div>
                </div>
                </div>

                <div className="right box">
                <h2>Contact us</h2>
                <div className="content">
                    <form action="#">
                    <div className="email">
                        <div className="text">Email *</div>
                        <input type="email" required />
                    </div>
                    <div className="msg">
                        <div className="text">Message *</div>
                        <textarea rows="2" cols="25" required></textarea>
                    </div>
                    <div className="btn">
                        <button type="submit">Send</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="bottom">
                <center>
                <span className="credit">Created By <a href="#">MSS MJCET</a> | </span>
                <span className="far fa-copyright"></span
                ><span> 2022 All rights reserved.</span>
                </center>
            </div>
            </footer>

        </div>
    );
}

export default Footer;