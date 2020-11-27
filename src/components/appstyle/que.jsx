import React, {useEffect} from 'react'

function Que(props) {

    const transitionIn = () => {
        const diseno = document.getElementById("diseno")
        const reunion = document.getElementById("reunion")
        const programacion = document.getElementById("programacion")
        setTimeout(() => {
            diseno
                .classList
                .remove("go-up")
            reunion
                .classList
                .remove("go-left")
            programacion
                .classList
                .remove("go-right")
        }, 1550)
    }

    const timerIn = () => setTimeout(() => {
        transitionIn()
    }, 100);

    const transitionOut = () => {
        const top = document.getElementById("diseno")
        const reunion = document.getElementById("reunion")
        const programacion = document.getElementById("programacion")
            top
                .classList
                .add("go-up")
            reunion
                .classList
                .add("go-left")
            programacion
                .classList
                .add("go-right")
    }

    const timerOut = () => setTimeout(() => {
        transitionOut()
    }, 100);

    if (!props.status) {
        timerOut()
        setTimeout(() => {
            props.selected(props.temp)
        }, 300)
    }
    useEffect(() => {
        timerIn()
    });
    return (
        <div className="que-container">
            <div className="que">
                <div id="reunion" className="que-chart relative go-left">
                    <h3 className="purple">Reunión</h3>
                    <p>Plantear necesidades y alcances</p>
                    <p>1 día</p>
                </div>
                <div id="diseno" className="que-chart relative go-up">
                    <h3 className="purple">Lanzamiento</h3>
                    <p>Diseño y desarrollo de landing para pasarela</p>
                    <p>1 semana</p>
                </div>
                <div id="programacion" className="que-chart relative go-right">
                    <h3 className="purple">Proyecto</h3>
                    <p>Diseño y desarrollo de plataforma web</p>
                    <p>4 semanas</p>
                </div>
            </div>
        </div>

    )
}

export default Que