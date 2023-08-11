const initialState = {
    todos: [],
    loading: false
}



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "load/todos/start":
            return {
                ...state,
                loading: true
            }

        case "load/todos/fulfilled":
            return {
                ...state,
                todos: action.payload,
                loading: false
            }

        case "delete/todo/start":
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            deleting: true
                        }
                    }
                    return item
                })
            }

        case "delete/todo/fulfilled":
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            }

        case "check/load/start":
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            checking: true,
                        }
                    }
                    return item
                })
            }

        case "check/load/fulfilled":
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (action.payload === todo.id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                            checking: false
                        }
                    }
                    return todo
                })
            }
        default:
            return state
    }
}