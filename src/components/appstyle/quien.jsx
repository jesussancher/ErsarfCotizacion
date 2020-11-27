import React,{useEffect} from 'react'
import cv from '../cv.pdf'
function Quien(props) {
    const transitionIn = () => {
        const name = document.getElementById("name")
        const job = document.getElementById("job")
        const CV = document.getElementById("CV")
        const wa = document.getElementById("wa")
        setTimeout(() => {
            setTimeout(() => {name.classList.remove("go-enter")},500)
            setTimeout(() => {job.classList.remove("go-enter")},1000)
            setTimeout(() => {CV.classList.remove("go-enter")},1500)
            setTimeout(() => {wa.classList.remove("go-enter")},2000)
        }, 550)
    }

    const timerIn = () => setTimeout(() => {
        transitionIn()
    }, 100);

    const transitionOut = () => {
        const name = document.getElementById("name")
        const job = document.getElementById("job")
        const CV = document.getElementById("CV")
        const wa = document.getElementById("wa")
        wa.classList.add("go-enter")
        CV.classList.add("go-enter")
        job.classList.add("go-enter")
        name.classList.add("go-enter")
        // setTimeout(() => {wa.classList.add("go-enter")},500)
        // setTimeout(() => {name.classList.add("go-enter")},2000)
        // setTimeout(() => {job.classList.add("go-enter")},1500)
        // setTimeout(() => {CV.classList.add("go-enter")},1000)
    }

    const timerOut = () => setTimeout(() => {
        transitionOut()
    }, 100);

    if (!props.status) {
        timerOut()
        setTimeout(() => {
            props.selected(props.temp)
        }, 600)
    }
    useEffect(() => {
        timerIn()
    });
    return (
        <div className="que-container">
            <div className="quien">
                <h3 id="name" className="purple go-enter">Jesús Sánchez</h3>
                <p id="job" className="yellow go-enter">Web Designer/Developer</p>
                <h1 id="CV" className="go-enter"><a href={cv} target="blank">CV</a></h1>
                <h3 id="wa" className="purple go-enter"><a href="https://wa.link/ep6qz7" target="_blank">Escríbeme</a></h3>
            </div>
        </div>
    )
}

export default Quien