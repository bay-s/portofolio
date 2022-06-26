import React, { useEffect } from "react";
import AOS from "aos";

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer className="footer" >
      <div className="footer-icon" >
   <span>bayux265@gmail.com</span>
      </div>
      <div className="footer-icon">
        <span className="fa fa-github"></span>
        <a href="https://github.com/bay-s" target="_blank">Github</a>
      </div>
    </footer>
  );
}

export default Footer;
