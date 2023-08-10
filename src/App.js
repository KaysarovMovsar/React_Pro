import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CheckTodo, loadTodos, RemoveTodo} from "./action";
import * as PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import {Header} from "./Header";


const App = () => {
    const todos = useSelector((state) => state.todos)
    const loading = useSelector((state) => state.loading)
    //На фоне происходят какие-то асинхронные работы
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    const HandleClickDelete = (id) => {
        dispatch(RemoveTodo(id))
    }

    const CheckOnChange = (id, completed) => {
        dispatch(CheckTodo(id, completed))
    }


    const Preloader = () => {
        return (
            <div className="preloader">
                <ReactLoading type={'spin'} color={'red'} height={200} width={200} />
            </div>
        );
    }

    return (
        <div className= "Wrapper">
            <Header />
                {
                    loading ? <Preloader/> : (
                        todos.map((item) => {
                            return (
                                <div className="todo_wrapper">
                                    <div className="checkbox">
                                        <input type="checkbox"
                                               checked={item.completed}
                                               onChange={() => CheckOnChange(item.id, item.completed)}
                                        />
                                    </div>
                                    <div className="todo">
                                        {item.title}
                                    </div>
                                    <div className="button">
                                        <button onClick={() => HandleClickDelete(item.id)}
                                        disabled={item.deleting}>delete</button>
                                    </div>
                                </div>
                            )
                        })
                    )}
        </div>
    )
}

export default App;



