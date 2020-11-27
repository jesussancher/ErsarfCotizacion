import React from 'react'
import PuffLoader from 'react-spinners/PuffLoader'

function Loader(props) {
    const timer = setTimeout(() => {
        props.setLoad(false)
    }, 2000);
    return (
        <div id="loader" className="main-container light-grey-bg center">
            <PuffLoader
            color={"var(--main-blue)"}/>
        </div>
    )
}

export default Loader