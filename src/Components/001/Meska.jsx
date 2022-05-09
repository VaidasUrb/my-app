import rand from "../../Functions/rand";

function Meska(){
    return <h2 style={
        {
           color: rand(0, 1)? 'blue' : 'red'
        }
    }>Meskiukas rudnosiukas</h2>
}

export default Meska;