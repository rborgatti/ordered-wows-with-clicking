import React from "react";

function WowView(props) {
    // LESSON: Notice how we pass a lambda function to the onClick parameter. 
    //          Notice that whenever you click a wow it will print out props.fullContent 
    //          to the javascript console in the browser developer tools.
    return (<tr onClick={() => props.onClickFn(JSON.parse(props.fullContent))}><pre>{props.fullContent}</pre></tr>)
}

export default WowView;