import {jsx} from "react/jsx-runtime";

export const loadTodos = () => {
    return (dispatch) => {
        dispatch({ type: "load/todos/start"})

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "load/todos/fulfilled",
                    payload: json
                })
            })
    }
}

export const RemoveTodo = (id) => {
    return (dispatch) => {
        dispatch({type: "delete/todo/start"})

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: "DELETE"})
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: "delete/todo/fulfilled",
                    payload: id
                })
            })
    }
}

