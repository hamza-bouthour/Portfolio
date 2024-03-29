import { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import {
    backendPortfolio,
    mobilePortfolio,
    webPortfolio } from "../../data";

const list = [
    {
        id: "featured",
        title: "Featured"
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
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    // const allData = backendPortfolio.concat(mobilePortfolio, webPortfolio);
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
            case "featured":
                setData(backendPortfolio.concat(mobilePortfolio, webPortfolio))
                break;
            default :
                setData(backendPortfolio.concat(mobilePortfolio, webPortfolio))
        }
    }, [selected])
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item, i) => {
                    return (
                        <PortfolioList 
                            key={i}
                            id={item.id} 
                            title={item.title} 
                            active={selected === item.id}
                            setSelected={setSelected}    
                        />
                    )
                })}
            </ul>
            <div className="container">
                {data.map((item, key) => {
                    return (
                        <div key={key} className="wrapper">
                            <a className="item" href={item.repo} target="_blank" rel="noreferrer">
                                <img src={item.image} alt="logo"/>
                                <h3>{item.title}</h3>
                            </a>
                            <div className="techContainer">
                                {item.technologies.map((tech, i) => {
                                    return (
                                        <img key={i} src={tech.image} alt="logo"/>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })}

            </div>
                <img className="iconSvg" src="assets/projects.svg" alt="logo"/>
        </div>
    )
}
