import {jsx} from "react/jsx-runtime";

export const loadTodos = () => {
    return (dispatch) => {
        dispatch({ type: "load/todos/start"})

        fetch("https://jsonplaceholder.typicode.com/todos")
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

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
            {method: "DELETE"})
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: "delete/todo/fulfilled",
                    payload: id
                })
            })
    }
}

export const CheckTodo = (id, completed) => {
    return (dispatch) => {
        dispatch({type: "check/load/start"})

        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {method: "PATCH",
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    completed: !completed
                })}
            )
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: "check/load/fulfilled",
                    payload: id
                })
            })
    }
}



