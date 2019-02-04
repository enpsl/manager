import React, {Component, Fragment} from 'react'
import {Button, Input, List} from "antd";

const TodoView = (props) => {
    return (
        <Fragment>
            <div style={{margin: "10px"}}>
                <Input placeholder='todo info' value={props.inputValue}
                       style={{width: 300, marginTop: "10px"}}
                       onChange={props.handleInputChange}
                />
                <Button type="primary"
                        style={{marginLeft: "10px"}}
                        onClick={props.addItem}
                >提交</Button>
                <List
                    style={{marginTop: "10px", width: "300px"}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
                />
            </div>
        </Fragment>
    );
};

export default TodoView