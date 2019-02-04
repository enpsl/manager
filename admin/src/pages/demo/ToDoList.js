import React, {Component, Fragment} from 'react'
import ToDoItem from "./ToDoItem";

class TodoList extends Component{
    constructor(props) {
        super(props);
        //当组件的state或props发生变化,render函数就会执行
        this.state = {
            inputValue: "",
            list: [],
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        console.log("parent render");
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleButtonClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getToDoItem()}
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        const value = e.target.value;
        //const value = this.input.value;
        this.setState(() => ({
            inputValue: value,
        }));
    }
    handleButtonClick(index) {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: "",
        }), () => {
            console.log(this.ul.querySelectorAll("li").length)
        });
    }
    handleDelete (index) {
        this.setState((prevState) => {
            const list = [...this.state.list];
            list.splice(index, 1);
            return {list}   //等价于{list: list}
        });
    }
    getToDoItem () {
        return this.state.list.map((item, index) => {
            return (
                <ToDoItem key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleDelete}
                />
            );
        })
    }
}
export default TodoList

