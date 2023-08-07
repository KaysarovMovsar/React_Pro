import {useEffect, useState} from "react";

const App = () => {
    //На фоне происходят какие-то асинхронные работы
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong")
                }
                return response.json();
            }).then((users) => {
            setData(users)
            setLoading(false)
        }).catch((reportError) => {
            console.log(reportError)
        })
    }, [])

    return (
        <ul className="list">
            <h2>To-do list</h2>
            {loading ? (
                <div>
                    Loading: please wait
                </div>
            ) : data.map((item) => {
                return (
                        <li className="element" key={item.id}>{item.email}</li>
                )
            })}
        </ul>

    )
}

export default App;



