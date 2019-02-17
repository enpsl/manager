import * as constants from './constants';
//保证state不会在外部被修改
import { fromJS } from "immutable"

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        //immutable的set方法，会结合immutable对象之前的值
        //和设置的值返回一个新的对象
        return state.set("focused", true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set("focused", false);
    }
    return state
}