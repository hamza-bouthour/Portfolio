import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

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
