import React, {Component} from 'react'

class ToDoItem extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        console.log("child render");
        const { content } = this.props;
        return <li
            onClick={this.handleClick}
        >{content}</li>
    }

    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index)
    }
}
export default ToDoItem