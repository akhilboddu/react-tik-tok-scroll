import React from "react";
import { FiHome, FiPenTool } from "react-icons/fi";
import { MdMovieFilter, MdOutlineGroupAdd } from "react-icons/md";


import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div class="navbar-icons">
        <FiHome className="icons" />
        <FiPenTool className="icons" />
        <MdMovieFilter className="icons" />
        <MdOutlineGroupAdd className="icons" />
        <div class="icons post-pic">
          <img src="https://zaiocontent.s3.eu-west-2.amazonaws.com/akhil.png" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
