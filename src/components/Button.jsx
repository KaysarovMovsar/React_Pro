export const Button = ({HandleClickDelete, deleting, id}) => {
    return <>
        <div className="button">
            <button onClick={() => HandleClickDelete(id)}
                    disabled={deleting}>delete</button>
        </div>
    </>
}