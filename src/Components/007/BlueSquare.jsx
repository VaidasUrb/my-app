import React, { useState } from "react";
import randColor from "../../Functions/randColor";
import Small from "./small";


function BlueSquare({ sc }) {

    const [bg, setBg] = useState('blue');
    const [brd, setBrd] = useState(1)

    const changeBg = () => {
        setBg(c => c === 'blue' ? 'red' : 'blue');
    }
    const ranback = () => {
        setBg(randColor());
    }

    const chnageBorder = () => {
        setBrd(b => b === 10 ? 1 : 10);
    }



    return (
        <div className="kvadratas blue" style={{
            backgroundColor: bg, borderWidth: brd + 'px',
            borderRadius: sc ? '50%' : '0'
        }}>
            <button onClick={changeBg}>Change color</button>
            <button onClick={ranback}>Random color</button>
            <button onClick={chnageBorder}>Change border</button>
            <Small side='left' top={-60} sc={sc} ></Small>
            <Small side='right' top={-60} sc={sc}></Small>
            <Small side='' top={240} sc={sc}></Small>
        </div>

    )
}

export default BlueSquare;