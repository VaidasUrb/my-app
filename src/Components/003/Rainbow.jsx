function Rainbow(props) {

    return (
        <div>

        { 
            props.colors.filter(c=>'skyblue'!==c).sort().map((c, i) => <div key={i} className="rcolor" style={{backgroundColor: c}}></div>) 
        }

        </div>
    )

}

export default Rainbow;

