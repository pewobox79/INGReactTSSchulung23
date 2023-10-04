import AxiosButton from "../components/AxiosButton";

export default function AxiosHome() {

    return (
        <div>
            <h1>Axios</h1>

            <AxiosButton title="Get Posts"/>
            <AxiosButton title="Add Post"  requestType="post" />
            <AxiosButton title="Delete Post"  requestType="delete" />
            <AxiosButton title="Put Post"  requestType="put" />
            <AxiosButton title="Patch Post"  requestType="patch" />


        </div>

    )
}