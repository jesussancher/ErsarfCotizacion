import React from 'react'

function ToolTip(props) {
    return(
            <div className="tooltip absolute purple center">
                <h2>{props.title}</h2>
            </div>
    )
}

export default ToolTip