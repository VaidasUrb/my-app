import randColor from "../../Functions/randColor";

function Kates (){

    return (
        <ul className="kates" style={
            {
                color: randColor()
            }
        }>
            <li>Rainius</li>
            <li>Micius</li>
            <li>Ryzius</li>
        </ul>
    );
}

export default Kates;