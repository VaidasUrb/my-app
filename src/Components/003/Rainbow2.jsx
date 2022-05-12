function Rainbow2(props) {

    return (
        <div>

        { 
            props.colors.sort((c,a) => a.size - c.size).map((c, i) => <div key={i} className="rcolor" style={{backgroundColor: c.color, height: (c.size> 30? c.size: 30)+'px'}}></div>) 
        }

        </div>
    )

}

export default Rainbow2;

 