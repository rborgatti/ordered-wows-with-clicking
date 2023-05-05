// import logo from "./logo.svg";
import React, { useState } from "react";

function Wow(props) {
    const currentWow = props.currentWow;
    console.log("Re-rendering OwenWilsonWow")
    console.log("currentWow: " + JSON.stringify(currentWow, null, 2));
    let wowContent = "";
    if (currentWow !== undefined) {
        wowContent = (
            <div>
                Movie: {currentWow["movie"]} <br />
                Full line: {currentWow["full_line"]} <br />
                <audio controls preload="auto" src={currentWow["audio"]}></audio>  <br />
                <img src={currentWow["poster"]} alt="movie poster" style={{ maxHeight: "25%", maxWidth: "25%" }}></img>  <br />
                <div>
                    <video controls preload="auto" src={currentWow["video"]["1080p"]} height="1080px" width="1920px"></video>
                </div>
            </div>
        );
    }

    console.log("currentWow:\n" + JSON.stringify(currentWow));
    return (<div style={{ maxWidth: "100%" }}>
        {wowContent}
    </div >)
}

export default Wow;