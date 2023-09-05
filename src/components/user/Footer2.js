import React from "react";
import "./../../assets/css/footer2.css";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiFacebook, FiPhoneCall, FiLinkedin } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="main-container">
      <div className="footer-container">
        {/* social media  */}

        <div className="media">
          <h5 className="social-media-heading">FOLLOW US ON</h5>
          <div className="social-media-container">
            <div className="insta">
              <a className="nav-link" href="https://www.instagram.com/mssmjcet/?hl=en"> <FaInstagram/> </a>
            </div>
            <div className="twitter">
              <a className="nav-link" href="https://twitter.com/mssmjcet"> <FiTwitter /> </a>
            </div>
            <div className="facebook">
              <a className="nav-link" href="https://www.facebook.com/MicrosoftStudentSociety/"> <FiFacebook /> </a>
            </div>
            <div className="linkedin">
              <a className="nav-link" href="https://in.linkedin.com/company/microsoft-student-society"> <FiLinkedin /> </a>
            </div>
          </div>
        </div>

        {/* aboutus,contactus,home */}
        <div className="ach-container">
          <NavLink to="/" className="nav-link">
            <p>-Home</p>
          </NavLink>

          <NavLink to="/events" className="nav-link">
            <p>-Our Events</p>
          </NavLink>
          <NavLink to="/teams" className="nav-link">
            <p>-About us</p>
          </NavLink>
        </div>

        <div className="address-container">
          <h5 className="address-heading">ADDRESS</h5>
          <p>
            
            <a className="nav-link" href="https://goo.gl/maps/7Qts5rTGpjNdd1FJ8">
              {" "}<GrLocation className="address-icon" /> Mount Pleasant, 8-2-249, Road No. 3, Banjara Hills, Hyderabad, Telangana 500034{" "}
              </a>
          </p>
          <p>
            {" "}
            <FiPhoneCall className="address-icon" /> +91 65845232145
          </p>
          <p>
            {" "}
            <HiOutlineMail className="address-icon" /> abc@gmail.com{" "}
          </p>
        </div>
      </div>

      <div>
        <p> MSS MJCET © 2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer2;
