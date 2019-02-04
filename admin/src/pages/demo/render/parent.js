import React, {Component, Fragment} from 'react'
import Child from './child'

class Parent extends Component{
    constructor(props) {
        super(props);
        //当组件的state或props发生变化,render函数就会执行
        this.state = {
            content: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        console.log("render");
        const { content } = this.state;
        return (
            <Fragment>
                <div>parent</div>
                <input onChange={this.handleInputChange}/>
                <Child content={content}/>
            </Fragment>
        );
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            content: value,
        }));
    }
}

export default Parent