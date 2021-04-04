import React from "react";
import Navbar from "../components/Navbar";
import foto from "../foto.png";
import email from "../email.png";
import linkedin from "../linkedin.png";
import github from "../github.png";

const Header = () => {
  function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      return "Buenos días, soy";
    } else if (hour >= 12 && hour < 23) {
      return "Buenas tardes, soy";
    } else {
      return "Buenas noches, soy";
    }
  }

  return (
    <div className="header-wraper">
      <div className="main-info">
        <Navbar></Navbar>
        <div className="info-container">
          <div className="my-info">
            <h2>{getGreeting()}</h2>
            <h1>Carlos Alba</h1>
            <h3>Desarrollador Full Stack</h3>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/carlos-alba-lópez-ab4867120"
                className="btn-main-offer"
                target="blank"
              >
                <img src={linkedin} alt="LinkedIn"></img>
              </a>
              <a
                href="https://github.com/CarlosAlbaLopez"
                className="btn-main-offer"
                target="blank"
              >
                <img src={github} alt="GitHub"></img>
              </a>
              <a href="mailto:call4mefb@gmail.com" className="btn-main-offer">
                <img src={email} alt="Email"></img>
              </a>
            </div>
          </div>
          <div className="my-photo">
            <img src={foto} alt="foto" id="foto"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
