function Button({ clickButton, greenNumber, changeBacground, clickAddSrs, clickRemSrs }) {

    return (
        <>
            <button onClick={clickButton}>Make pink</button>
            <button onClick={greenNumber}>One plus</button>
            <button onClick={changeBacground}>Change bacground</button>
            <button onClick={clickAddSrs}>Add []</button>
            <button onClick={clickRemSrs}>Remove []</button>
        </>
    )

}

export default Button;