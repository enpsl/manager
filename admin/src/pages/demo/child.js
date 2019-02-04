import React from 'react'

export default class Child extends React.Component{
    componentWillMount() {
        console.log("componentWillUnmount")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log("componentWillReceiveProps" + nextProps.name)
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("componentWillUpdate" + nextProps.name)
    }

    render() {
        return <div>
            <p>{this.props.name}</p>
        </div>
    }
}