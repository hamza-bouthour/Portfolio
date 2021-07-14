import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from 'ityped';

export default function Intro() {

    const descriptionRef = useRef()
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/resized-halfbody-removebg-preview.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Hamza Bouthour</h1>
                    <h3>Web and Mobile developer</h3>
                </div>
                <a href="#portfolio" >
                    <img src="assets/arrowdown.png"/>
                </a>
            </div>
        </div>
    )
}
