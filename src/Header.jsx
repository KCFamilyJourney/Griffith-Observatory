import React from "react";
import "./header.css"
import sign from "./assets/Griffith Observatory.png"

function Header(props){

    return <>
    <div className="container">
        <table className="table">
        <thead className="thead">
        <tr>
            <th>
                <img src={sign} alt="Griffith Observatory picture" style={{width: "200px"}}></img>
            </th>
            <th>
                <h1><a href={props.reference}>{props.title}</a></h1>  
            </th>
        </tr>
        </thead>    
        </table>
    </div>
    </>;
}

export default Header;