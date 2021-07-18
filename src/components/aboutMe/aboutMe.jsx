import "./aboutMe.scss";

export default function AboutMe() {
    
    
    return (
        <div className="aboutme" id="aboutme">
            <div className="introduction">
                <h1>A little about me</h1>
                <a href="google.com" ><img src="assets/instagram.png" className="socialIcons" alt="logo" /></a>
                <a href="google.com" ><img src="assets/facebook.png" className="socialIcons" alt="logo"/></a>
            </div>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/music1.jpg" alt="music" /> 
                </div>
                <div className="textContainer">
                    <h3>Passion</h3>
                    <p>sdfjsalkdfjaslfkjaslfk salkdfjas asfj lkkjadsflkajsflkjs sdlkfjasldkfjaslkfjjas k
                    lkksdflkasjflksjlaskjff </p>
                </div>
               
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/music23.jpg" alt="music"/> 
                </div>
                <div className="textContainer">
                    <h3>Dedication</h3>
                    <p>sdfjsalkdfjaslfkjaslfk salkdfjas asfj lkkjadsflkajsflkjs sdlkfjasldkfjaslkfjjas k
                    lkksdflkasjflksjlaskjff </p>
                </div>
            </div>
            <img src="assets/happy2.svg" className="svgLogo" alt="logo"/>
        </div>
    )
}