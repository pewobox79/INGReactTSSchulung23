import Button from '@mui/material/Button';
import { getPosts, addNewPost, putPost,patchPost, deletePost } from '../services/axiosRequests/axios';

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
            case "get":
            default: getPosts()
        }

    }

    return (

        <Button onClick={handleAxiosRequest}>{title}</Button>


    )
}