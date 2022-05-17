import { useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';

function App() {
    // states
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [color, setColor] = useState('blue');
    const [number, setNumber] = useState(1);
    const [sq, setSq] = useState([]);

    //const addSquare = () => setSq(s => [...s, [s.length + 1]]);
    const addSquare = () => {
        setSq(s => [...s, randColor()]);
    }

    // personalines funkcijos
    // const doNumber = () => {
    //     setNumber(s => s + 1);
    // }
    // const doNumber1 = () => {
    //     setNumber(s => s - 1);
    // }
    const doMath = number => {
        setNumber(o => o + number);
    } // sujungti du i viena


    // const mekeShow = what => {
    //     setShow(s => !s);
    // }
    // const doShow1 = () => {
    //     setShow1(s => !s);
    // }
    const makeShow = what => {
        what ? setShow(s => !s) : setShow1(s => !s);
    }


    // const makeRed = () => {
    //     setColor('red');
    // }
    // const makeYellow = () => {
    //     setColor('yellow');
    // }
    const changeColor = color => setColor(color); //sujungti du i viena

    return (
        <div className="App">
            <header className="App-header">
                <div className="sqc">
                    {
                        sq.map((s, i) => (
                            <div className="sq red" key={i} style={{ background: s }}></div>)
                        )
                    }
                </div>
                <div className="sqc">
                    {
                        show ? <div className="sq" style={{ background: color }}>1</div> : null
                    }
                    {
                        show1 ? <div className="sq" style={{ background: color }}>2</div> : null
                    }
                </div>

                <h1>HOOK {number}</h1>
                <div className="sqc">
                    <button onClick={() => doMath(1)}>Add One</button>
                    <button onClick={() => doMath(-1)}>Remove One</button>
                    <button onClick={() => makeShow(1)}>Show/Hide 1</button>
                    <button onClick={() => makeShow(0)}>Show/Hide 2</button>
                    <button onClick={() => changeColor('red')}>Make Red</button>
                    <button onClick={() => changeColor('yellow')}>Make Yellow</button>
                    <button onClick={addSquare}>Add Square</button>
                </div>
            </header>
        </div>
    );
}

export default App;