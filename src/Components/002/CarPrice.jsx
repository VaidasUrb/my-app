function CarPrice(props){
    return<>{props.price > 40000 ? <h3>{props.price}</h3> : <h4>{props.price}</h4>}</>
}

export default CarPrice;