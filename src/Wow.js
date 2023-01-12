// import logo from "./logo.svg";
import React, { useState } from "react";

function Wow() {
    console.log("Re-rendering OwenWilsonWow")

    const defaultWowValue = "Awaiting Wows";
    const [currentWow, setCurrentWow] = useState(defaultWowValue);
    console.log("currentWow: " + currentWow);

    const options = { method: 'GET', headers: { accept: 'application/json' } };

    let getRandomWow = () => {
        console.log("getRandomWow called!");
        fetch("https://owen-wilson-wow-api.onrender.com/wows/random", options)
            .then(response => {
                console.log("wow response: " + response);
                response.json().then((randomWow) => {
                    console.log("Retrieved randomWow: " + Object.entries(randomWow));
                    setCurrentWow(randomWow);
                })
            })
            .then(response => console.log(response))
            .catch(err => console.error(err));
    };

    let wowContent = "";
    if (currentWow !== defaultWowValue) {
        wowContent = (
            <div>
                Movie: {currentWow[0]["movie"]} <br />
                Full line: {currentWow[0]["full_line"]} <br />
                <audio controls preload="auto" src={currentWow[0]["audio"]}></audio>  <br />
                <img src={currentWow[0]["poster"]} alt="movie poster" style={{ maxHeight: "25%", maxWidth: "25%" }}></img>  <br />
                <div>
                    <video controls preload="auto" src={currentWow[0]["video"]["1080p"]} height="1080px" width="1920px"></video>
                </div>
            </div>
        );
    }

    console.log("currentWow:\n" + JSON.stringify(currentWow));
    return (<div style={{ maxWidth: "100%" }}>
        <div>"Wows start below!"</div>
        <button onClick={getRandomWow}>Get Wowed</button>
        {wowContent}
    </div >)
}

export default Wow;