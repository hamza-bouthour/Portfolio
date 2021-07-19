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
                        <img src="assets/music1.jpg" alt="music" /> 
                        {/* assets/music23.jpg */}
                    </div>
                    <div className="imgContainer">
                        <img src="assets/music23.jpg" alt="music" /> 
                        {/* assets/music23.jpg */}
                    </div>

                </div>
                <div className="textContainer">
                    <h1>Hello again,</h1>
                    <p> I'm a guitar player for over 20 years. I performed actively in front of a large or small audience and wrote music of many genres. My dedication to Music came along with determination, perseverance, self-discipline and reliability. I learned to work well as part of a team, and to be effectively detailed. My passion and discipline leaned towards programming, a field where i can still use my creativity and my personal skills to design beautiful and dynamic applications.
                    </p>
                </div>
               
            </div>
            <img src="assets/happy2.svg" className="svgLogo" alt="logo"/>
        </div>
    )
}