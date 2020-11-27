import React from 'react'

function Lobby(props) {

    const setLoader = () => {
        hideScreen()
        const timer = setTimeout(() => {
            props.setLoad(true)
            props.screen("main")
        }, 500);
    }
    const hideScreen = () => {
        const screen = document.getElementById("lobby")
        screen
            .classList
            .add("translate-main-container")
    }
    return (
        <div id="lobby" className="main-container purple-bg center">
            <h1 className="yellow">¡Bienvenidos!</h1>
            <button onClick={setLoader} className="main-btn white">Continuar</button>
        </div>
    )
}

export default Lobby