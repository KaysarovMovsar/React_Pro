import {useSelector} from "react-redux";
import {Todo} from "./Todo";

export const Todos = ({HandleClickDelete, CheckOnChange}) => {
    const todos = useSelector((state) => state.todos)

    return <>
            {
                todos.map((item) => {
                    return (
                        <Todo
                            checking={item.checking}
                            title={item.title}
                            id={item.id}
                            completed={item.completed}
                            deleting={item.deleting}
                            HandleClickDelete={HandleClickDelete}
                            CheckOnChange = {CheckOnChange}
                        />
                    )
                })
            }
        </>
}