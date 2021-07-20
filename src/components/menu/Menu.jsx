import "./menu.scss"

const ListItem = props => {
    return (
        <li onClick={() => props.setNavOpen(false)}>
            <a href={`#${props.destination}`}>{props.name}</a>
        </li>
    )
}
export default function Menu(props) {
    return (
        <div className={"menu " + (props.navOpen && "active")}>
            <ul>
                <ListItem setNavOpen={props.setNavOpen} destination="intro" name="Home"/>
                <ListItem setNavOpen={props.setNavOpen} destination="portfolio" name="Portfolio"/>
                <ListItem setNavOpen={props.setNavOpen} destination="works" name="Services"/>
                <ListItem setNavOpen={props.setNavOpen} destination="testimonials" name="Skills"/>
                <ListItem setNavOpen={props.setNavOpen} destination="aboutme" name="About me"/>
                <ListItem setNavOpen={props.setNavOpen} destination="contact" name="Contact"/>
            </ul>
            
        </div>
    )
}
