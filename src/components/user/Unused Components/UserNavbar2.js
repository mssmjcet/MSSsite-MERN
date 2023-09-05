import { useEffect } from "react";
import { useState } from "react";
import "./../../../assets/css/navbar.css";
import { Link } from "react-router-dom";
const UserNavbar2=()=>{
    const [desktopNavHidden, setDesktopNavHidden] = useState(false);
  const [searchContainerHidden, setSearchContainerHidden] = useState(true);
  const [overlayShown, setOverlayShown] = useState(false);
  const [navContainerActive, setNavContainerActive] = useState(false);
  const [searchBarActive, setSearchBarActive] = useState(false);
  const [navMoveUp, setNavMoveUp] = useState(false);

  const handleSearchButtonClick = () => {
    setDesktopNavHidden(true);
    setSearchContainerHidden(false);
    setOverlayShown(true);
  };

  const handleCloseButtonClick = () => {
    setDesktopNavHidden(false);
    setSearchContainerHidden(true);
    setOverlayShown(false);
  };

  const handleOverlayClick = () => {
    setDesktopNavHidden(false);
    setSearchContainerHidden(true);
    setOverlayShown(false);
  };

  const handleMenuIconClick = () => {
    setNavContainerActive(!navContainerActive);
  };

  const handleSearchInputClick = () => {
    setSearchBarActive(true);
    setNavMoveUp(true);
    setDesktopNavHidden(true);
  };

  const handleCancelBtnClick = () => {
    setSearchBarActive(false);
    setNavMoveUp(false);
    setDesktopNavHidden(false);
  };
//     useEffect(()=>{
//         const searchButton = document.querySelector("nav .desktop-nav .link-search");
// const closeButton = document.querySelector(".search-container .link-close");
// const desktopNav = document.querySelector(".desktop-nav");
// const searchContainer = document.querySelector(".search-container");
// const overlay = document.querySelector(".overlay");

// searchButton.addEventListener("click", () => {
//     desktopNav.classList.add("hide");
//     searchContainer.classList.remove("hide");
//     overlay.classList.add("show");
// })

// closeButton.addEventListener("click", () => {
//     desktopNav.classList.remove("hide");
//     searchContainer.classList.add("hide");
//     overlay.classList.remove("show");
// })

// overlay.addEventListener("click", () => {
//     desktopNav.classList.remove("hide");
//     searchContainer.classList.add("hide");
//     overlay.classList.remove("show");
// })


// // Mobile Version

// const menuIconContainer = document.querySelector("nav .menu-icon-container");
// const navContainer = document.querySelector(".nav-container");

// menuIconContainer.addEventListener("click", () => {
//     navContainer.classList.toggle("active");
// })


// const searchBar = document.querySelector(".mobile-search-container .search-bar");
// const nav = document.querySelector(".nav-container nav");
// const searchInput = document.querySelector(".mobile-search-container input");
// const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

// searchInput.addEventListener("click", () => {
//     searchBar.classList.add("active");
//     nav.classList.add("move-up");
//     desktopNav.classList.add("move-down");
// })

// cancelBtn.addEventListener("click", () => {
//     searchBar.classList.remove("active");
//     nav.classList.remove("move-up");
//     desktopNav.classList.remove("move-down");
// })
//     })
    return(
    <div className="nav-body">
    <div className="nav-container">
        <nav>
            <ul className="mobile-nav">
                <li>
                    <div className="menu-icon-container">
                        <div className="menu-icon">
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                        </div>
                    </div>
                </li>

                <li>
                    <Link to="" className="link-logo"></Link>
                </li>

                <li>
                    <Link to="" className="link-bag"></Link>
                </li>
            </ul>

            <ul className="desktop-nav">
                <span>
                    <li>
                        <Link to="/" className="link-logo"><img className="mss-log" src="/assets/images/mss-logo4.png" alt=""/></Link>    
                    </li>
                </span>

                <span>
                    <li>
                        <Link to="/"><span><h5>MSS MJCET</h5></span></Link>  
                    </li>
                </span>
    
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/teams">Team</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
              
                <li>
                    <Link to="#" className="link-search"></Link>
                </li>
                <li>
                    <Link to="#" className="link-bag"></Link>
                </li>

            </ul>
        </nav>

        {/* <!-- End of navigation menu items --> */}

        <div className="search-container hide">
            {/* <!-- <div className="link-search"></div> --> */}
            {/* <!-- <div className="search-bar">
                <form action="">
                    <input type="text" placeholder="Search apple.com">
                </form>
            </div> --> */}
            <div className="link-close"></div>

            {/* <!-- <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <a href="#">Visiting an Apple Store FAQ</a>
                    </li>
                    <li>
                        <a href="#">Shop Apple Store Online</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">AirPods</a>
                    </li>
                    <li>
                        <a href="#">AirTag</a>
                    </li>
                </ul>
            </div> --> */}
        </div>


        {/* <!-- <div className="mobile-search-container">
            <div className="link-search"></div>
            <div className="search-bar">
                <form action="">
                    <input type="text" placeholder="Search apple.com">
                </form>
            </div>
            <span className="cancel-btn">Cancel</span>

            <div className="quick-links">
                <h2>Quick Links</h2>
                <ul>
                    <li>
                        <a href="#">Visiting an Apple Store FAQ</a>
                    </li>
                    <li>
                        <a href="#">Shop Apple Store Online</a>
                    </li>
                    <li>
                        <a href="#">Accessories</a>
                    </li>
                    <li>
                        <a href="#">AirPods</a>
                    </li>
                    <li>
                        <a href="#">AirTag</a>
                    </li>
                </ul>
            </div>
        </div> --> */}
    </div>
    <div className="overlay"></div>
    </div>
    );
}

export default UserNavbar2;