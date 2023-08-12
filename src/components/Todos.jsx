import {useSelector} from "react-redux";
import {Todo} from "./Todo";

export const Todos = ({HandleClickDelete, CheckOnChange}) => {
    const todos = useSelector((state) => state.todos)
    const users = useSelector((state) => state.users)

    return <>
            {
                todos.map((item) => {
                    return (
                        <Todo
                            checking={item.checking}
                            title={item.title}
                            key={item.id}
                            users={users}
                            userId={item.userId}
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