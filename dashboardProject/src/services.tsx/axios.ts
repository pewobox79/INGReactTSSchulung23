import axios from 'axios'


const URL:string = "https://jsonplaceholder.typicode.com/users"
export function getUsers(){

    axios.get(URL).then(res => {return res.data})


   
}