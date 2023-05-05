import './App.css';
import Owen from "./owen_wilson_wow.jpeg"
import { useEffect, useState } from "react";
import Wow from './Wow';
import WowView from './WowView';


/*
 * Assignment:
 * 1. Make it so that when you click the text of the wow it displays that wow in the 
 * Wow box that is currently populated when you click "Get Wowed" - In Progress
 * 2. Add prev/next buttons to move through the range of ordered wows. - Done
 * 3. Stylize the table holding all the data
 * 4. Stylize the entire page with better colors
 */
function App() {

    const [currentWows, setCurrentWows] = useState([]);
    const [wowStartIndex, setWowStartIndex] = useState(0);
    const [wowEndIndex, setWowEndIndex] = useState(10);
    const [currentWow, setCurrentWow] = useState(undefined);
    let nextButtonDisabled = false
    // do not modify
    let getOrderedWowsRange = async (startIndex, endIndex) => {
        console.log("Getting wows from range: %d - %d", startIndex, endIndex);
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        let url = `https://owen-wilson-wow-api.onrender.com/wows/ordered/${startIndex}-${endIndex}`
        let orderedWowsResponse = await fetch(url, options);
        console.log("orderedWowsResponse: " + Object.entries(orderedWowsResponse));
        let orderedWows = await orderedWowsResponse.json();
        console.log("Retrieved orderedWows: " + Object.entries(orderedWows));
        setCurrentWows(orderedWows);
    };
    // do not modify
    useEffect(() => {
        getOrderedWowsRange(wowStartIndex, wowEndIndex);

    }, [wowStartIndex, wowEndIndex]);
    let previousPage = () => {
        setWowStartIndex(Math.max(0, wowStartIndex - 10));
        setWowEndIndex(Math.max(10, wowEndIndex - 10));

    };
    let nextPage = () => {
        console.log("nextClick");
        if (currentWows.length < 10) {
            nextButtonDisabled = true
            return;
        }
        setWowStartIndex(wowStartIndex + 10);
        setWowEndIndex(wowEndIndex + 10);
    };
    return (

        <div className="App">
            <h1>Prepare to be WOW-ed</h1>
            <div style={{ fontWeight: "bold" }}>
                Wow Wow Wow <br />
                <img src={Owen} width="700px" alt="Owen Wilson Wow LP"></img>
            </div>
            <Wow currentWow={currentWow}></Wow>
            <div>
                <button onClick={previousPage}>Previous</button>
                <button disabled={nextButtonDisabled} onClick={nextPage}>Next</button>
            </div>
            <div className="wowsTable">
                <table className="wowsTable">
                    <thead>
                        <tr>All the wows you could ever want</tr>
                        <tr><br /></tr>
                    </thead>
                    {currentWows.map(val => <WowView onClickFn={setCurrentWow} fullContent={JSON.stringify(val, null, 2)} />)}
                </table>
            </div>
        </div >
    );
}

export default App;
