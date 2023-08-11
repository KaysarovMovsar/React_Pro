import ReactLoading from "react-loading";

export const Checking = ({checking, completed, id, CheckOnChange}) => {
    return <>
        <div className="checkbox">
            {
                checking ? (
                    <ReactLoading type={'spin'} color={'red'} height={ 20 } width={ 20 } />
                ) : (
                    <input type="checkbox"
                           checked={completed}
                           onChange={() => CheckOnChange(id, completed)}
                    />
                )
            }

        </div>
    </>
}