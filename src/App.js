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
        <>
            {loading ? (
                <div>
                    Loading: please wait
                </div>
            ) : data.map((item) => {
                return (
                    <div key={item.id}>{item.email}</div>
                )
            })}
        </>

    )
}

export default App;



