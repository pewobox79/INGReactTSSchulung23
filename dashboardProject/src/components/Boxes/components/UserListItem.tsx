import { NavLink } from "react-router-dom"
type UserItemType ={
    name: string,
    id: number,
    username: string,
    key: number,
    setUserId: React.Dispatch<React.SetStateAction<number>>,
    userId: number

}
export default function UserListItem({name, username, id, userId}:UserItemType) {

    /* function handleClick(){
        setUserId(id)
        } */
  return (
    <NavLink to={`/userdetails/${id}`} className={`userNameBox ${userId === id ?"contactActive": ""}`}>{name} alias {username}</NavLink>
  )
}
