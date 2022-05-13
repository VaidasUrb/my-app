import React from "react";


class FatDog extends React.Component {

    constructor() {
        super();
        this.state = { font: 20 };
    }

    spust = () => {
        console.log('Ivyko mygtuko paspaudimo procesas');
        this.setState(f => (f.font === 20 ? { font: 40 } : { font: 20 }))
    }

    render() {
        return (
            <>
                <h2 style={
                    {
                        color: this.props.color,
                        fontSize: this.state.font + 'px'
                    }
                }>Fat Dog</h2>
                <button onClick={this.spust}>Click</button>
            </>
        )
    }

}

export default FatDog;