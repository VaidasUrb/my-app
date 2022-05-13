import React from "react";


class FatCat extends React.Component {

    constructor() {
        super();
        this.state = { weight: 5, color: 'red' };
    }

    paspaudimas = () => {
        console.log('Ivyko mygtuko paspaudimo procesas');
        this.setState(s => ({ weight: s.weight + 1 }))
    }

    pmakeRed = () => {
        console.log('Ivyko mygtuko paspaudimo procesas');
        this.setState({ color: 'blue' })
    }

    render() {
        return (
            <>
                <h2 style={{ color: this.state.color }}>Fat Cat {this.props.color} {this.state.weight}kg</h2>
                <button onClick={this.paspaudimas}>Click Cat</button>
                <button onClick={this.pmakeRed}>Click Cat red</button>
            </>
        )
    }

}

export default FatCat;