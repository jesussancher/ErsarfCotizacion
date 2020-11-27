import React, {useEffect} from 'react';

function Cuanto(props) {
    const transitionIn = () => {
        const packOne = document.getElementById("packOne")
        const desde = document.getElementById("desde")
        const desc = document.getElementById("desc")
        const precio = document.getElementById("precio")
        const packTwo = document.getElementById("packTwo")
        const desde1 = document.getElementById("desde1")
        const desc1 = document.getElementById("desc1")
        const precio1 = document.getElementById("precio1")
        setTimeout(() => {
            setTimeout(() => {
                packOne
                    .classList
                    .remove("go-enter")
            }, 500)
            setTimeout(() => {
                packTwo
                    .classList
                    .remove("go-enter")
            }, 1000)
            setTimeout(() => {
                precio
                    .classList
                    .remove("go-enter")
                desde
                    .classList
                    .remove("go-enter")
                desc
                    .classList
                    .remove("go-enter")
            }, 1000)
            setTimeout(() => {
                precio1
                    .classList
                    .remove("go-enter")
                desde1
                    .classList
                    .remove("go-enter")
                desc1
                    .classList
                    .remove("go-enter")
            }, 1500)
        }, 550)
    }

    const timerIn = () => setTimeout(() => {
        transitionIn()
    }, 100);

    const transitionOut = () => {
        const packOne = document.getElementById("packOne")
        const precio = document.getElementById("precio")
        const desde = document.getElementById("desde")
        const desc = document.getElementById("desc")
        const packTwo = document.getElementById("packTwo")
        const precio1 = document.getElementById("precio1")
        const desde1 = document.getElementById("desde1")
        const desc1 = document.getElementById("desc1")
        setTimeout(() => {
            packOne
                .classList
                .add("go-enter")
        }, 500)
        setTimeout(() => {
            packTwo
                .classList
                .add("go-enter")
        }, 1000)
        setTimeout(() => {
            precio
                .classList
                .add("go-enter")
            desde
                .classList
                .add("go-enter")
            desc
                .classList
                .add("go-enter")
        }, 1000)
        setTimeout(() => {
            precio1
                .classList
                .add("go-enter")
            desde1
                .classList
                .add("go-enter")
            desc1
                .classList
                .add("go-enter")
        }, 1500)
    }

    const timerOut = () => setTimeout(() => {
        transitionOut()
    }, 100);

    if (!props.status) {
        timerOut()
        setTimeout(() => {
            props.selected(props.temp)
        }, 500)
    }
    useEffect(() => {
        timerIn()
    });

    return (
        <div className="que-container">
            <div className="que">
                <div id="packOne" className="que-chart relative go-enter">
                    <h3 id="desde" className="yellow go-enter">BÁSICO</h3>
                    <h1 id="precio" className="go-enter purple">$350 USD</h1>
                    <p id="desc" className="go-enter purple">
                        Diseño + Desarrollo</p>
                </div>
                <div id="packTwo" className="que-chart relative go-enter">
                    <h3 id="desde1" className="yellow go-enter">COMPLETO</h3>
                    <h1 id="precio1" className="go-enter purple">$480 USD</h1>
                    <p id="desc1" className="go-enter purple">
                        <b className="yellow">Básico
                        </b>
                        + Dominio + Hosting /
                        <b>
                            1 año</b>
                        + Mantenimiento /
                        <b>
                            6 meses</b>
                    </p>
                </div>
            </div>
            <a href="https://wa.link/ep6qz7" target="_blank">
                <div className="sticky__tooltip">¿Tenemos un trato?
                    <br></br>¡Escríbeme!</div>
            </a>
        </div>
    )
}

export default Cuanto