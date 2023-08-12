import ReactLoading from "react-loading";
import {Checking} from "./Checking";
import {Button} from "./Button";

export const Todo = ({deleting, checking, completed, id, title, CheckOnChange, HandleClickDelete, users, userId}) => {
    const user = users.find((item) => item.id === userId)
    return <>
        <div className="todo_wrapper">
            <Checking
                checking={checking}
                title={title}
                id={id}
                completed={completed}
                CheckOnChange = {CheckOnChange}
            />
            <div className="todo">
                {title}
                <br/>
                (email:{user.email})
            </div>
            <Button
                id={id}
                HandleClickDelete={HandleClickDelete}
                deleting={deleting}
            />
        </div>
    </>
}