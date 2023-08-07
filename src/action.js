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

