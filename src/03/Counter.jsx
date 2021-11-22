import React from "react";
import StateExample from "./StateExample";

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:5,
        };
    }

    increaseCount(){
        this.state.count = 6;

    }

    render() {
        return(
            <div>
                <span>카운트: {this.state.count}</span>
                <button onClick={this.increaseCount()}> 카운트 증가!</button>
            </div>
        )
    }
}
export default Counter;