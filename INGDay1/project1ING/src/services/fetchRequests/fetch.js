
const URL = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts(abortController, setPosts, setIsLoading){

    fetch(URL, { signal: abortController.signal })
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setIsLoading(false)
        })
        .catch(() => {
            console.log('Posts können nicht geladen werden, anfrage abgebrochen.')
        })
}


export function addNewPost(){

    const config ={
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: "neuer Post",
            body: "hier ist mein neuer Post"
        })
    }

    fetch(URL, config)
    .then(res => res.json())
    .then(data => console.log("neuer Artikel ",data))
}


export function deletePost(){

    fetch(`${URL}/1`, {method: "DELETE"} )
}