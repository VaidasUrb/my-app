import './App.scss';
import { useCallback, useEffect, useState } from 'react';
import Te from "./Components/019/Te";
import Number3 from './Components/019/Number3';
import Number5 from './Components/019/Number5';


function App() {

    const [number, setNumber] = useState(1);
    const [number3, setNumber3] = useState(3);
    const [number5, setNumber5] = useState(1);
    const [number7, setNumber7] = useState(7);
    const [number9, setNumber9] = useState(9);



    const abc = useCallback(() => {
        console.log('ABC' + number)
    }, [number])


    useEffect(() => {
        // console.log('Go')
        abc()
    }, [abc])

    return (
        <Number5.Provider value={number5}>
            <Number3.Provider value={{ number3, number7, setNumber9 }}>
                <div className="App">
                    <header className="App-header">
                        <div className="kvc">
                            <button className="a" onClick={() => setNumber(n => n + 1)}>+1</button>
                            <button className="a" onClick={() => setNumber3(n => n + 3)}>+3</button>
                            <button className="a" onClick={() => setNumber5(n => n + 5)}>+5</button>
                            <button className="a" onClick={() => setNumber7(n => n + 7)}>+7</button>
                            <h2>{number9}</h2>
                        </div>
                        <h1>Context</h1>
                        <Te number={number}></Te>
                    </header>
                </div>
            </Number3.Provider>
        </Number5.Provider>
    );
}

export default App;