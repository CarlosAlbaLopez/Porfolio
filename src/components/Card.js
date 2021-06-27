import React from "react";
import github from "../images/github.png";
import newtab from "../images/newtab.png";

const Card = (props) => {
  const [title] = React.useState(props.title);
  const [subtitle] = React.useState(props.subtitle);
  const [image] = React.useState(props.image);
  const [color] = React.useState(props.color);
  const [link] = React.useState(props.link);
  const [technologies] = React.useState(props.technologies);
  const [imageWidth] = React.useState(props.imageWidth);

  return (
    <section className="tcard">
      <div style={{ backgroundColor: color, height: "100%" }}></div>
      <div className="info">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="btns-and-tags">
          <div className="btns">
            <button className="btn-project" style={{ backgroundColor: color }}>
              <a href={link} target="blank">
                VIEW PROJECT
              </a>{" "}
              <img src={newtab} alt="newtab" width="18px"></img>
            </button>
            <button className="btn-github">
              <a href={link} target="blank">
                GITHUB
              </a>{" "}
              <img src={github} alt="github" width="20px"></img>
            </button>
          </div>
          <div className="tags">
            <div className="tag">{technologies.one}</div>
            <div className="tag">{technologies.two}</div>
            <div className="tag">{technologies.three}</div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={image} alt={`Project for ${title}`} width={imageWidth}></img>
      </div>
    </section>
  );
};

export default Card;
