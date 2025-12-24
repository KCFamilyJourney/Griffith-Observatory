import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from "./Header";
import MyHikingMap from "./MyHikingMap";

function Mainframe(){

    const reference = "https://griffithobservatory.org/explore/griffith-park";
    const choices = [ 
        {   name: "Brush Canyon Trail and Mount Bell Loop",
            file: "BrushCanyon.csv",
            pos: {lat: 34.12501645871609,lng: -118.31391677586349} //34.12501645871609, -118.31391677586349
        },
        {   name: "Observatory Trail Extended Loop",
            file: "ObservatoryTrail.csv" ,
            pos: { lat: 34.12545624202727,lng: -118.31386991416954 } //34.12545624202727,-118.31386991416954
        },
    ];
    const [selectedOption, setSelectedOption] = useState(0); // Initial selected option

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return <>
        <Header title={"Griffith Observatory"} reference={reference}/>
        <Stack spacing={1} direction="row">
        {
            choices.map((item, index) => {
            return <Button key={index} value={index} variant={selectedOption==(index) ? "contained" : "outlined"} onClick={handleChange}>{item.name}</Button>
            })
        }
        </Stack>
        <hr></hr>
        <MyHikingMap csv={choices[selectedOption].file} mark={choices[selectedOption].pos}/>
        <hr></hr>
        <h3><a href="https://www.alltrails.com/parks/us/california/griffith-park">More trails ...</a></h3>
        <p><a href="https://kcfamilyjourney.github.io/home/">Home</a> | <a href="https://forms.gle/ErqZysKrBFxnL5SV7">Contact Us</a></p>
    </>;
}

export default Mainframe;