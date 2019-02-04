import React, {Component} from 'react'
import store from "../store"
import {getTodoList} from "../store/actions"

import TodoView from "./TodoView"

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.addItem = this.addItem.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <TodoView inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
            />
        );
    }

    componentDidMount() {
        store.dispatch(getTodoList())
    }

    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        };
        //传给store
        store.dispatch(action);
    }
    handleStoreChange (e) {
        this.setState(store.getState())
    }
    addItem (e) {
        const action = {
            type: 'add_todo_list',
            value: e.target.value
        };
        //传给store
        store.dispatch(action);
    }

    deleteItem (index) {
        const action = {
            type: 'delete_todo_list',
            index
        };
        //传给store
        store.dispatch(action);
    }

}

export default TodoList