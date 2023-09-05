import React from "react";
import "./../../assets/css/footer2.css";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiFacebook, FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="main-container">
      <div className="footer-container">
        {/* social media  */}

        <div className="media">
          <h5 className="social-media-heading">FOLLOW US ON</h5>
          <div className="social-media-container">
            <div className="insta">
              <FaInstagram />
            </div>
            <div className="twitter">
              <FiTwitter />
            </div>
            <div className="facebook">
              <FiFacebook />
            </div>
          </div>
        </div>

        {/* aboutus,contactus,home */}
        <div className="ach-container">
          <NavLink to="/" className="nav-link">
            <p>Home</p>
          </NavLink>

          <NavLink className="nav-link">
            <p>Contact us</p>
          </NavLink>
          <NavLink className="nav-link">
            <p>About us</p>
          </NavLink>
        </div>

        <div className="address-container">
          <h5 className="address-heading">ADDRESS</h5>
          <p>
            {" "}
            <GrLocation className="address-icon" /> Muffakham Jah College{" "}
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
