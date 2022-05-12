function CarsList (props){

    return(
        <div>
            {props.cars.map((c, i)=> <h3 key={i}>{c}</h3>)}
        </div>
        
    )
}

export default CarsList;