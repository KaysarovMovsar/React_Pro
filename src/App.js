import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {CheckTodo, loadTodos, loadUsers, RemoveTodo} from "./redux/action";
import * as PropTypes from "prop-types";
import ReactLoading from 'react-loading';
import {Header} from "./Header";
import {Todos} from "./components/Todos";


const App = () => {
    const loading = useSelector((state) => state.loading)
    const loadingUsers = useSelector((state) => state.loadingUsers)
    //На фоне происходят какие-то асинхронные работы
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadTodos())
        dispatch(loadUsers())
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
                    loading || loadingUsers ? <Preloader/> : (
                        <Todos
                            HandleClickDelete={HandleClickDelete}
                            CheckOnChange={CheckOnChange}
                        />
                    )}
        </div>
    )
}

export default App;



