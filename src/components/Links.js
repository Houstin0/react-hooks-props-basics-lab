import React from "react";

function Links(props) {
    console.log(props)
    return(
        <div>
            <h3>Links</h3>
            <a href={props.github}>user's Github link</a>
            <a href={props.linkedin}>user's LinkedIn link</a>
        </div>
    )
}
export default Links