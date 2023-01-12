import React from "react";

function WowView(props) {
    return (<tr onClick={() => console.log("Click received on: '%s'", props.fullContent)}><pre>{props.fullContent}</pre></tr>)
}

export default WowView;