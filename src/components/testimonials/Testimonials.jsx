import  { useState } from "react";
import "./testimonials.scss";
import { skillsIcons } from "../../data";

function generatePosition() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    let top = null;
    let left = null;
    console.log(vw)
    if (vw < 765) {
        top = Math.ceil(Math.random() * (200 - 50) + 50);
        left = Math.ceil(Math.random() * (300 - 50) + 50);
    }
    else {
        top = Math.ceil(Math.random() * (200 - 50) + 50);
        left = Math.ceil(Math.random() * (1000 - 50) + 50);
    }
    // console.log({
    //     top: top + "px",
    //     left: left + "px"
    // })
    return {
        position: "absolute",
        width: "85px",
        height: "85px",
        margin: "20px",
        top: top + "px",
        left: left + "px"
    }

}

export default function Testimonials() {
    const flexState = {
        width: "85px",
        height: "85px",
        margin: "20px",
    }
    // const caughtState = {
    //     backgroundColor: "black",
    //     opacity: 0.3,
    //     width: "45px",
    //     height: "45px",
    //     margin: "20px",
    //     caught: true
    // }


    const [boxStyle1, setBoxStyle1] = useState(flexState);
    const [boxStyle2, setBoxStyle2] = useState(flexState);
    const [boxStyle3, setBoxStyle3] = useState(flexState);
    const [boxStyle4, setBoxStyle4] = useState(flexState);
    const [boxStyle5, setBoxStyle5] = useState(flexState);
    const [boxStyle6, setBoxStyle6] = useState(flexState);
    const [boxStyle7, setBoxStyle7] = useState(flexState);
    const [boxStyle8, setBoxStyle8] = useState(flexState);
    const [boxStyle9, setBoxStyle9] = useState(flexState);
    const [boxStyle10, setBoxStyle10] = useState(flexState);

    // function resetIcons() {
    //     console.log('lol')
    //     setBoxStyle1(flexState)
    //     setBoxStyle2(flexState)
    //     setBoxStyle3(flexState)
    //     setBoxStyle4(flexState)
    //     setBoxStyle5(flexState)
    //     setBoxStyle6(flexState)
    //     setBoxStyle7(flexState)
    //     setBoxStyle8(flexState)
    //     setBoxStyle9(flexState)
    //     setBoxStyle10(flexState)
    // }
    
    return (
        <div className="testimonials" id="testimonials">
            <h1>Skills</h1>
            <div className="wrapper">
                <img key={1} style={boxStyle1} className="skillBox" src={skillsIcons.react}  alt="logo" onMouseOver={() => {(!boxStyle1.caught && setTimeout(() => {setBoxStyle1(generatePosition())}, 100) )}}/>
                <img key={2} style={boxStyle2} className="skillBox" src={skillsIcons.bootstrap}  alt="logo" onMouseOver={() => {(!boxStyle2.caught && setTimeout(() => {setBoxStyle2(generatePosition())}, 100) )}}/>
                <img key={3} style={boxStyle3} className="skillBox" src={skillsIcons.sass}  alt="logo" onMouseOver={() => {(!boxStyle3.caught && setTimeout(() => {setBoxStyle3(generatePosition())}, 100) )}} />
                <img key={4} style={boxStyle4} className="skillBox" src={skillsIcons.reactNative}  alt="logo" onMouseOver={() => {(!boxStyle4.caught && setTimeout(() => {setBoxStyle4(generatePosition())}, 100) )}} />
                <img key={5} style={boxStyle5} className="skillBox" src={skillsIcons.express}  alt="logo" onMouseOver={() => {(!boxStyle5.caught && setTimeout(() => {setBoxStyle5(generatePosition())}, 100) )}} />
                <img key={6} style={boxStyle6} className="skillBox" src={skillsIcons.mysql}  alt="logo" onMouseOver={() => {(!boxStyle6.caught && setTimeout(() => {setBoxStyle6(generatePosition())}, 100) )}} />
                <img key={7} style={boxStyle7} className="skillBox" src={skillsIcons.expo}  alt="logo" onMouseOver={() => {(!boxStyle7.caught && setTimeout(() => {setBoxStyle7(generatePosition())}, 100) )}} />
                <img key={8} style={boxStyle8} className="skillBox" src={skillsIcons.mongoDb}  alt="logo" onMouseOver={() => {(!boxStyle8.caught && setTimeout(() => {setBoxStyle8(generatePosition())}, 100) )}} />
                <img key={9} style={boxStyle9} className="skillBox" src={skillsIcons.css}  alt="logo" onMouseOver={() => {(!boxStyle9.caught && setTimeout(() => {setBoxStyle9(generatePosition())}, 100) )}} />
                <img key={10} style={boxStyle10} className="skillBox" src={skillsIcons.redux}  alt="logo" onMouseOver={() => {(!boxStyle10.caught && setTimeout(() => {setBoxStyle10(generatePosition())}, 100) )}} />
            </div>
        </div>
    )
}


