import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./action";
import * as PropTypes from "prop-types";
import ReactLoading from 'react-loading';


const App = () => {
    const todos = useSelector((state) => state.todos)
    const loading = useSelector((state) => state.loading)
    //На фоне происходят какие-то асинхронные работы
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodos())
    }, [])

    const Preloader = () => {
        return (
            <div className="preloader">
                <ReactLoading type={'spin'} color={'red'} height={200} width={200} />
            </div>
        );
    }

    return (
        <div className= "Wrapper">
            <h1>Todo List</h1>
                {
                    loading ? <Preloader/> : (
                        todos.map((item) => {
                            return (
                                <div className="item">
                                    {item.name}
                                </div>
                            )
                        })
                    )}
        </div>
    )
}

export default App;



