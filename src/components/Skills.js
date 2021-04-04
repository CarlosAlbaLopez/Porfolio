import React from "react";
import css3 from "../css3.png";
import git from "../git.png";
import html5 from "../html5.png";
import js from "../js.png";
import mysql from "../mysql.png";
import netcore from "../netcore.png";
import nodejs from "../nodejs.png";
import react from "../react.png";
import sqlserver from "../sqlserver.png";
import visual from "../visual.png";
import xamarin from "../xamarin.png";
import gimp from "../gimp.png";
import vb from "../vb.png";
import csharp from "../csharp.png";
import firebase from "../firebase.png";

function Skills() {
  return (
    <div className="skills-container">
      <a id="linktoskills" href>
        habilidades
      </a>
      <div className="logos-container-1">
        <img src={html5} alt="html5"></img>
        <img src={css3} alt="css3"></img>
        <img src={js} alt="js"></img>
        <img src={react} alt="react"></img>
        <img src={nodejs} alt="nodejs"></img>
      </div>
      <div className="logos-container-2">
        <img src={mysql} alt="mysql"></img>
        <img src={sqlserver} alt="sqlserver"></img>
        <img src={gimp} alt="gimp"></img>
        <img src={git} alt="git"></img>
      </div>
      <div className="logos-container-3">
        <img src={netcore} alt="netcore"></img>
        <img src={firebase} alt="firebase"></img>
        <img src={xamarin} alt="xamarin"></img>
      </div>
      <div className="logos-container-4">
        <img src={csharp} alt="csharp"></img>
        <img src={vb} alt="vb"></img>
      </div>

      <img src={visual} alt="visual"></img>
    </div>
  );
}

export default Skills;
