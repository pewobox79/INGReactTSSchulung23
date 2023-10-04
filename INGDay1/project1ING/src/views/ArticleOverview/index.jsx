import { useState, useEffect } from "react";
import ArticleItem from "./components/ArticleItem";
import { addNewPost, deletePost, getPosts } from "../../services/fetchRequests/fetch";
export default function ArticleOverview() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
const [deleted, setDelete] = useState(false)

    useEffect(() => {
        const abortController = new AbortController();
        setIsLoading(true)
        setTimeout(() => {

            getPosts(abortController, setPosts, setIsLoading)
    },1000)


        return () => {
            console.log("cleanup")
            setError(false)
            abortController.abort()
        }

    }, [deleted])


    const ListOfPosts = posts?.map((item) => {

        return <ArticleItem key={item.id} id={item.id} title={item.title} body={item.body} />
    })

    function handleAddPost(){
        addNewPost()
    }

    function handleDelete(){
        deletePost()
        setDelete(!deleted)
    }

    return <div style={{ textAlign: "center" }}>

        <h1>My Articles</h1>

        <button onClick={handleAddPost}>
            Add New Post
            </button>

        <button onClick={handleDelete}>
            Delete Post 1
        </button>

        {error && <div>irgendwas ist faul</div>}
        {isLoading ? <h4>Artikel werden geladen </h4> : ListOfPosts}


    </div>
}