import React, { useState } from "react";
import randColor from "../../Functions/randColor";
import Small from "./small";
import ButtonHolder from "./ButtonHolder";


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
            <ButtonHolder virvute={changeBorder} border={border}></ButtonHolder>
            <Small border={border} side="left" top={-60} sc={sc}></Small>
            <Small border={border} side="right" top={-60} sc={sc}></Small>
            <Small border={border} side="" top={140} sc={sc}></Small>
        </div>

    )
}

export default BlueSquare;