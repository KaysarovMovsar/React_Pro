import ReactLoading from "react-loading";
import {Checking} from "./Checking";
import {Button} from "./Button";

export const Todo = ({deleting, checking, completed, id, title, CheckOnChange, HandleClickDelete}) => {
    return <>
        <div className="todo_wrapper">
            <Checking
                title={title}
                id={id}
                completed={completed}
                CheckOnChange = {CheckOnChange}
            />
            <div className="todo">
                {title}
            </div>
            <Button
                id={id}
                HandleClickDelete={HandleClickDelete}
                deleting={deleting}
            />
        </div>
    </>
}