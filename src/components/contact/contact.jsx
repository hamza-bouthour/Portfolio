import "./contact.scss";
import {Person, Mail} from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PinDropIcon from '@material-ui/icons/PinDrop';
export default function Contact() {
    return (
        <div className="contact" id="contact">
        
            <div className="left">
                {/* <img src="assets/worker.svg" /> */}

            </div>
            <div className="right">
                <h1>Let's work together</h1>
                <ul>
                    <li className="itemContainer">
                        <Mail className="icon" id="emailIcon"/>
                        <span>bouthour.h@gmail.com</span>
                    </li>
                    <li className="itemContainer">
                        <Person className="icon"id="phoneIcon"/>
                        <span>+1 209 321 0491</span>
                    </li>
                    <li className="itemContainer">
                        <LinkedInIcon className="icon" id="LinIcon"/>
                        <span>LinkedIn</span>
                    </li>
                    <li className="itemContainer">
                        <GitHubIcon className="icon" id="githubIcon"/>
                        <span>Github</span>
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