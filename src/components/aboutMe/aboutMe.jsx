import "./aboutMe.scss";

export default function AboutMe() {
    return (
        <div className="aboutme" id="aboutme">
            <div className="introduction">
                <h1>A little about me</h1>
                <a href="https://www.instagram.com/h.bhzo/" target="_blank" rel="noreferrer"><img src="assets/instagram.png" className="socialIcons" alt="logo" /></a>
                <a href="https://www.facebook.com/ham.panini/" target="_blank" rel="noreferrer"><img src="assets/facebook.png" className="socialIcons" alt="logo"/></a>
            </div>
            <div className="left">
                <div className="imgWrapper">
                    <div className="imgContainer">
                        <img src="assets/music10.jpg" alt="music" /> 
                    </div>
                    <div className="imgContainer">
                        <img src="assets/music20.jpg" alt="music" /> 
                    </div>
                </div>
                <div className="textContainer">
                    <h1>Hello again,</h1>
                    <p>I've been a guitar player for over 20 years. I performed actively in front of large and small audiences. I also wrote music for many different genres. My dedication to music helped me become determined, allowed me to persevere, gave me self-discipline, and made me reliable. I learned to work efficiently as part of a team and be effectively detailed. My passion and discipline brought me to programming. In this field, I can still use my creativity and my personal skills to design beautifully dynamic applications.
                    </p>
                </div> 
            </div>
            <img src="assets/happy2.svg" className="svgLogo" alt="logo"/>
        </div>
    )
}