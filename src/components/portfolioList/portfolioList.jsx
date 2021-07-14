import "./portfolioList.scss";

export default function PortfolioList(props) {
    return (
        <li className={props.active ? "porftolioList active" : "porftolioList"}
            onClick={() => props.setSelected(props.id)}
        >
            {props.title}
        </li>
    )
}
