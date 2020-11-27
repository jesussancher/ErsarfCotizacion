import React from 'react'
import Top from './top'
import Bottom from './bottom'
import ToolTip from './tooltip'
import Que from './que'
import Quien from './quien'
import Cuanto from './cuanto'
import {useState} from 'react'

function MainScreen() {
    const [title,
        setTitle] = useState("¿Qué haremos?")
    const [selected,
        setSelected] = useState("que")
    const [tempSelected,
        setTempSelected] = useState("que")
    const setTitulo = (e) => {
        setTitle(e)
    }
    const setSelect = (e) => {
        setSelected(e)
    }
    const setTempSelect = (e) => {
        setTempSelected(e)
    }
    const screen = (e) => {
        if (e === "que") {
            return (<Que
                status={tempSelected === "que"
                ? true
                : false}
                status2={selected === "que"
                ? true
                : false}
                selected={setSelected}
                temp={tempSelected}/>);
        } else if (e === "quien") {
            return (<Quien
                status={tempSelected === "quien"
                ? true
                : false}
                status2={selected === "quien"
                ? true
                : false}
                selected={setSelected}
                temp={tempSelected}/>);
        } else {
            return (<Cuanto
                status={tempSelected === "cuanto"
                ? true
                : false}
                status2={selected === "cuanto"
                ? true
                : false}
                selected={setSelected}
                temp={tempSelected}/>);
        }
    }
    return (
        <div>
            <Top/>
            <div className="main-screen-bg">
                {screen(selected)}
            </div>
            {/* <ToolTip title={title}/> */}
            <Bottom title={setTitulo} selected={setTempSelect}/>
        </div>
    )
}

export default MainScreen