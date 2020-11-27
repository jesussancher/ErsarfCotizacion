import React from 'react'
import {useState} from 'react'
import jesus from '../jesus.png'
import cv from '../cv.pdf'
function Bottom(props) {
    // const [title,
    //     setTitle] = useState("")
    // const [offset,
    //     setOffset] = useState(0)

    const setTitulo = (e) => {
        props.title(e)
    }
    const setSelected = (e) => {
        props.selected(e)
    }


    const mouseOver = (id) => {
        switch (id) {
            case "que":
                setTitulo("¿Qué haremos?");
                break;
            case "cuanto":
                setTitulo("¿Cuánto costará?");
                
                break;
                case "quien":
                setTitulo("¿Quién lo hará?");
                break;
        }
    }

    const mouseClick = (id) => {
        switch (id) {
            case "que":
                setTitulo("¿Qué haremos?");
                setSelected("que")
                break;
            case "cuanto":
                setTitulo("¿Cuánto costará?");
                setSelected("cuanto")
                
                break;
                case "quien":
                setTitulo("¿Quién lo hará?");
                setSelected("quien")
                break;
        }
    }
    return (
        <div className="bottom row relative">
            <div id="que" className="bottom-btn center">
                <i onMouseOver={() => mouseOver("que")} 
                onClick={() => mouseClick("que")}
                class="fas fa-pencil-ruler"></i>
            </div>
            <div id="quien" className="bottom-btn">
                <div
                    id="jesusCV"
                    style={{
                    backgroundImage: 'url(' + jesus + ')'
                }}
                    onMouseOver={() => mouseOver("quien")}
                    onClick={() => mouseClick("quien")}
                    className="jesus" ></div>
            </div>
            <div id="cuanto" className="bottom-btn center">
                <i
                    onMouseOver={() => mouseOver("cuanto")}
                    onClick={() => mouseClick("cuanto")}
                    class="fas fa-receipt"></i>
            </div>
        </div>
    )
}

export default Bottom