import './App.scss';
import Button from './Components/008/Button';
import Green from './Components/008/Green';
import { useState } from 'react';
import Kvadratukai from './Components/008/Kvadratukai';

function App() {

    const [mrGreen, setMrGreen] = useState('green');
    const [number, setNumber] = useState(1);
    const [cb, steCb] = useState(false);
    const [srs, setSrs] = useState([]);


    const clickButton = () => {
        setMrGreen(c => c === 'green' ? 'pink' : 'green')
    }

    const greenNumber = () => {
        setNumber(n => n + (cb ? -1 : 1))
    }

    const changeBacground = () => {
        steCb('r => !r')
    }

    const clickAddSrs = () => setSrs(s => [...s, 1]);
    const clickRemSrs = () => setSrs(s => s.slice(1));

    return (
        <div className="App">
            <header className="App-header">
                <h1>Uplifting<span style={{
                    color: mrGreen, backgroundColor: cb ? 'red' : null,
                    padding: '7px'
                }}>{number}</span></h1>
                <Button clickButton={clickButton} greenNumber={greenNumber} changeBacground={changeBacground} clickAddSrs={clickAddSrs} clickRemSrs={clickRemSrs}></Button>
                <Green mrGreen={mrGreen}></Green>
                <div className="square-garden">
                    {
                        srs.map((_, i) => <Kvadratukai which={i} key={i} ></Kvadratukai>)
                    }
                </div>
            </header >
        </div >
    );
}

export default App;