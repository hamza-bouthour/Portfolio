import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import {
    skillsIcons,
    backendPortfolio,
    mobilePortfolio,
    webPortfolio } from "../../data";

const list = [
    {
        id: "all",
        title: "All"
    },
    {
        id: "web",
        title: "Web"
    },
    {
        id: "mobile",
        title: "Mobile"
    },
    {
        id: "backend",
        title: "Back-end"
    }
]

export default function Portfolio() {
    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);
    const allData = backendPortfolio.concat(mobilePortfolio, webPortfolio);
    useEffect(() => {
        switch(selected) {
            case "backend":
                setData(backendPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            case "all":
                setData(allData)
                break;
            default :
                setData(allData)
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => {
                    return (
                        <PortfolioList 
                            id={item.id} 
                            title={item.title} 
                            active={selected === item.id}
                            setSelected={setSelected}    
                        />
                    )
                })}
            </ul>
            <div className="container">
                {data.map(item => {
                    return (
                        <div className="wrapper">
                            <div className="item">
                                <img src={item.image} />
                                <h3>{item.title}</h3>
                            </div>
                            <div className="techContainer">
                                {item.technologies.map(tech => {
                                    return (
                                        <img src={tech.image} alt={tech.name}/>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}
