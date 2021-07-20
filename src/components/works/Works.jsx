import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Front-end web application",
      desc: ["Designing user interactions on web pages.", "Ensuring responsiveness of applications.", "Developing features to enhance user experience.", "building reusable code for future use.", "Proficiency in HTML, CSS, JavaScript, JQuery and React.", "Refactoring, rewriting, and evolving software."],
      img:
        "frontendAppliction.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: ["Build pixel-perfect, buttery smooth UIs across both mobile platforms.","Troubleshoot and debug applications", "Maintain code and write automated tests to ensure the product is of the highest quality.", "Transition existing React web apps to React Native."],
      img:
        "assets/mobileApplication.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Back-end",
      desc: ["Creating database schemas that represent and support business processes.","Conduct functional and non-functional testing.", "Services / API development and integration.", "Implement multi-factor authentication.", "Proficient understanding of code versioning tools, such as Git"],
      img:
        "assets/backendApplication.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (


    <div className="works" id="works">
      <h1>Services</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <ol>
                    {d.desc.map(x => {
                      return (
                        <li>&#x2022; {x}</li>
                      )
                    })}
                  </ol>
                </div>
              </div>
              <div className="right">
                <img
                  src="assets/webdevelopment.svg"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrowRight.svg"
        className="arrow left"
        alt="logo"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrowRight.svg"
        className="arrow right"
        alt="logo"
        onClick={() => handleClick()}
      />
     <img src="assets/body.svg" className="svgworks" alt="logo" />
    </div>
  );
}


