import Button from '@mui/material/Button';
import { getPosts, addNewPost, putPost,patchPost, deletePost, getAllData, errorHandling } from '../services/axiosRequests/axios';


export default function AxiosButton({ requestType, title }) {

    function handleAxiosRequest() {
    
        switch (requestType) {
            case "post":
                addNewPost()
                break;
            case "delete":
                deletePost()
                break;
            case "put":
                putPost()
                break;
            case "patch":
                patchPost()
                break;
            case "all":
                getAllData()
                break;
            case "err":
                errorHandling()
                break;
            case "get":
            default: getPosts()
        }

    }

    return (
        <Button onClick={handleAxiosRequest}>{title}</Button>


    )
}