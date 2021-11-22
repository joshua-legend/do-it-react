import React from "react";

class ChildCom extends React.Component {
    render() {

        const {
            bool,num,array,obj,node,func
        } = this.props;



        return (
            <div>
                <span>{bool}</span>
                <span>{num}</span>
                <span>{array}</span>
                <span>{obj}</span>
                <span>{node}</span>
                <span>{func}</span>
            </div>
        );
    }
}

export default ChildCom;