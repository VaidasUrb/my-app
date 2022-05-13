import React from "react";
import Fish from "./Fish";

class Lake extends React.Component {

    constructor() {
        super();
        this.state = { show: false };
    }

    show = () => {
        this.setState(s => ({ show: !s.show }));
    }

    render() {
        return (
            <>
                <div className="lake">
                    <Fish show={this.state.show}></Fish>
                </div>
                <button onClick={this.show}>Show Hide Fish</button>
            </>
        );
    }

}

export default Lake;