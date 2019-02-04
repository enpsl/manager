import React, {Component} from 'react'

class Dom extends Component{
    render() {
        //JSX->createElement->虚拟DOM（js对象）->真实的dom
        //return <div>item</div>;
        return React.createElement("div", {}, 'item')
    }
}

export default Dom