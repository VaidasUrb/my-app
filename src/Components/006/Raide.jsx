import randColor from "../../Functions/randColor";

function Raide({ zodis, i }) {

    return (
        <span style={{ color: randColor(), backgroundColor: i % 2 ? 'black' : 'white' }}>
            {zodis}
        </span>
    )
}

export default Raide;