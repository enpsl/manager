import React, {Component} from 'react'

class Child extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.content !== this.props.content) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        console.log("child render");
        const { content } = this.props;
        return (
            <div>{content}</div>
        );
    }
}

export default Child