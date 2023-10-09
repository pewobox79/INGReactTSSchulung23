
import { useEffect, useState } from 'react';
import BoxLayout from '../../layouts/BoxLayout'
import axios from 'axios';
import UserListItem from './components/UserListItem';
import { useContext } from 'react';
import { UserContext } from '../../layouts/MainLayout';

const URL: string = "https://jsonplaceholder.typicode.com/users"

type UserListBoxType ={
    userId: number,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    setSelectedUser: React.Dispatch<React.SetStateAction<object>>,
}
export default function UserListBox({userId, setUserId, setSelectedUser}:UserListBoxType) {

    const userContextData = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(()=>{
        if(userId === 0){
            axios.get(URL).then(res => setUsers(res.data))
        }else{
            axios.get(`${URL}/${userId}`).then(res => setSelectedUser(res.data))
        }
       
    
    },[userId, setSelectedUser])

   console.log(userContextData)


    const ListOfUsers = userContextData?.map((user:{id: number, name: string, username: string})=>{

        return <UserListItem key={user.id} name={user.name} username={user.username} id={user.id} setUserId={setUserId} userId={userId}/>

    })
    return <BoxLayout>
        <h4>LIST OF USER</h4>

        <div className="userNameListing">
            {ListOfUsers}
        </div>

    </BoxLayout>
}
