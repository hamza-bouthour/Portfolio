import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar(props) {
    return (
        <div className={"topbar " + (props.navOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">GitHam</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+1 209 321 0491</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>bouthour.h@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <a href="https://www.linkedin.com/in/hamza-bouthour-a0265919b/" rel="noreferrer" target="_blank">
                            <LinkedInIcon className="icon" id="LinIcon"/>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://github.com/hamza-bouthour" target="_blank" rel="noreferrer">
                            <GitHubIcon className="icon" id="githubIcon"/>
                            <span>Github</span>
                        </a>
                    </div>
                </div>
                    
                <div className="right">
                    <div className="hamburger" onClick={() => props.setNavOpen(!props.navOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>   
            </div>
        </div>
    )
}
