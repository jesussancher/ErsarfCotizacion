import React, {useState, useEffect} from 'react';
import Lobby from './components/lobby'
import Loader from './components/loader'
import MainScreen from './components/appstyle/main-screen'
import './styles.css'
import './App.css';

function App() {
    const [loader,
        setLoader] = useState(false)
    const [screen,
        setScreen] = useState("lobby")
    const setLoad = (e) => {
        setLoader(e)
    }
    const setPantalla = (e) => {
        setScreen(e)
    }
    if (loader) {
        return <Loader setLoad={setLoad}/>
    } else {
        switch (screen) {
            case "lobby":
                return (
                    <div className="">
                        <Lobby setLoad={setLoad} screen={setPantalla}/> {/* <MainScreen /> */}
                    </div>
                );
            case "main":
                return (
                    <div className="">
                        <MainScreen setLoad={setLoad} screen={setPantalla}/> {/* <MainScreen /> */}
                    </div>
                );
            default:
        }

    }
}
export default App;
