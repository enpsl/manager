import axios from "axios"

export const getTodoList = () => {
    return (dispatch) => {
        axios.get("/list.json").then((res) => {
            const data = res.data;
            const action = {
                type: 'init_axios_data',
                data
            };
            //传给store
            dispatch(action);
        });
    }
};