function ColorMark(props){
    return(
        <div className="color-mark" style={
            {
                backgroundColor: props.color,
                width: props.widthSize+'px',
                height: props.widthSize+'px'
            }
        }></div>
    )
}

export default ColorMark;