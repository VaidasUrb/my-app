import CarPrice from "./CarPrice";
import ColorMark from "./ColorMark";

function Car (props){
    return(
        <h2 style={
            {
                fontSize: props.size + 'px',
                fontFamily: props.font,
                
            }
        }>{props.maker} {props.color} <ColorMark color={props.backColor} widthSize={props.width}></ColorMark> 
            <div><CarPrice carPrice={props.price}></CarPrice></div>
        </h2>
    )
}

export default Car;