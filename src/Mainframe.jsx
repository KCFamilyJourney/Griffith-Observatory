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
            pos: {lat: 34.12501645871609,lng: -118.31391677586349}, //34.12501645871609, -118.31391677586349
            alltrails: "https://www.alltrails.com/trail/us/california/brush-canyon-trail-and-mount-bell-loop?u=i&sh=sqfqqm"
        },
        {   name: "Observatory Trail Extended Loop",
            file: "ObservatoryTrail.csv" ,
            pos: { lat: 34.118595788327305,lng: -118.29437454983662 }, //34.118595788327305, -118.29437454983662
            alltrails: "https://www.alltrails.com/trail/us/california/observatory-trail-extended-loop-trail?u=i&sh=sqfqqm"
        },
        {   name: "Fern Canyon, Hogback, North, Bill Eckert, and Upper Old Zoo Loop",
            file: "UpperOldZooLoop.csv" ,
            pos: { lat: 34.131043514209274,lng: -118.28348836098975 }, //34.131043514209274, -118.28348836098975
            alltrails: "https://www.alltrails.com/trail/us/california/mt-hollywood-trail?u=i&sh=sqfqqm"
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
        <h4><a href={choices[selectedOption].alltrails}>More on Alltrails ...</a></h4>
        <p><a href="https://kcfamilyjourney.github.io/home/">Home</a> | <a href="https://forms.gle/ErqZysKrBFxnL5SV7">Contact Us</a></p>
    </>;
}

export default Mainframe;