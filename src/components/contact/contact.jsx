import "./contact.scss";
import {Person, Mail} from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinDropIcon from '@material-ui/icons/PinDrop';
export default function Contact() {
    return (
        <div className="contact" id="contact">     
            <div className="left">
            </div>
            <div className="right">
                <h1>Let's work together</h1>
                <ul>
                    <li className="itemContainer">
                        <a href="mailto:bouthour.h@gmail.com" >
                            <Mail className="icon" id="emailIcon"/>
                            <span>bouthour.h@gmail.com</span>
                        </a>
                    </li>
                    <li className="itemContainer">
                        <Person className="icon"id="phoneIcon"/>
                        <span>+1 209 321 0491</span>
                    </li>
                    <li className="itemContainer">
                        <a href="https://www.linkedin.com/in/hamza-bouthour-a0265919b/" rel="noreferrer" target="_blank">
                            <LinkedInIcon className="icon" id="LinIcon"/>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li className="itemContainer">
                        <a href="https://github.com/hamza-bouthour" target="_blank" rel="noreferrer">
                            <GitHubIcon className="icon" id="githubIcon"/>
                            <span>Github</span>
                        </a>
                    </li>
                    <li className="itemContainer">
                        <PinDropIcon className="icon" id="pinIcon" />
                        <span>Salt Lake City, Utah</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}