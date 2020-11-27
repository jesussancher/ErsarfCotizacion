import React from 'react'

function Top() {
    const transition = () => {
        const top = document.getElementById("top")
        if (top !== null) {
            top
                .classList
                .add("down-item")
        }
    }

    const timer = () => setTimeout(() => {
        transition()
    }, 100);

    timer()
    return (
        <div id="top" className="top light-grey center">
            <h2>Cotización</h2>
        </div>
    )
}

export default Top