import { useState } from "react";
import randColor from "../../Functions/randColor";

function Small({ side, sc, top }) {
    const [color, setColor] = useState(null);

    if (!sc) {
        return null;
    }
    return (
        <div className="too-small" onClick={() => setColor(randColor())} style={
            {
                left: side === 'left' ? '-10px' : null,
                right: side === 'right' ? '-10px' : null,
                top: top + 'px',
                backgroundColor: color
            }
        }></div >
    )
}
export default Small;