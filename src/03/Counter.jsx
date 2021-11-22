import React from "react";
import StateExample from "./StateExample";

class Counter extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            count: 1,
        };
        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount(){
        this.setState(({count}) => ({
            count : count+1,
        }));
    }

    render() {
        return(
            <div>
                <span>카운트: {this.state.count}</span>
                <button onClick={this.increaseCount}> 카운트 증가!</button>
            </div>
        )
    }
}
export default Counter;