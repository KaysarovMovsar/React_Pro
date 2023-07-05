const App = () => {
    //На фоне происходят какие-то асинхронные работы

    const getData = () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong")
                }
                return response.json();
            }).then((users) => {
                console.log(users.filter(el => el.id % 2 !== 0 && el.name[0] === 'C'))
            }).catch((reportError) => {
                console.log(reportError)
            })
    }

    getData();
}

export default App;



