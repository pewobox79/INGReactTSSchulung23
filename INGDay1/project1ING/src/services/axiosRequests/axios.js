import axios from "axios"

/** BENEFITS AXIOS compared to FETCH 
 * 
 * **Backward compatibilty**
 * AXIOS is backward compatible...Even old browsers like IE11 can run Axios without any issue.
 * FETCH only available for chrome42+, firefox39+, edge14+, safari 10.3+
*/

const URL = 'https://jsonplacder.typicode.com/posts'
const URLUsers = 'https://jsonplaceholder.typicode.com/users'



//AXIOS Globals
//standard werte für alle requests setzen
axios.defaults.headers.common['X-Auth-Token'] = 'sometoken';

export function getPosts() {

    axios.get(URL, { params: { _limit: 5 } })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

export function deletePost() {
    axios.delete(`${URL}/1`).catch(err => console.log(err))
}


export function addNewPost() {
    const newPost = {
        title: "new post",
        body: "this is the new post"
    }

    const config = { headers: { 'Content-Type': 'application/json; charset=UTF-8' } }

    axios.post(URL, newPost, config).then(res => console.log("my new post values", res))
}


export function putPost() {
    axios.put(`${URL}/2`, { title: "neuer put wert", body: "body of put" }).then(res => console.log(res));
}



export function patchPost() {
    axios.patch(`${URL}/3`, { title: "neuer title mit patch", body: "hallo" }).then(res => console.log(res))
}


export function getAllData() {
callInterception()
    //was ist wenn zwei Quellen die abgerufen werden? 

    axios.all([
        axios.get(URL),
        axios.get(URLUsers)
    ]).then(axios.spread((posts, users) => {

        console.log("all", posts, users)

    })).catch(err => console.error(err))

}

export function errorHandling() {

    axios
        .get(URL)
        .then(res => console.log("success", res))
        .catch(err => {

            //response property ist includiert, wenn pfad nicht stimmt
            if (err.response) {

                console.log(err.response.status)
                console.log(err.response.data)
                console.log(err.response.headers)

                if (err.response.status === 404) {
                    alert("Error: Page not found")
                }
            } else if (err.request) {
                //request error ist wenn URL nicht erreichbar
                console.log("request error", err.request)
            } else {
                //alles andere 
                console.log("error", err.message)
            }
        })
}


//intercepting requests & repsonse
function callInterception() {
    axios.interceptors.request.use((config) => {

        console.log("config daten", config)
        console.error(`${config.method.toUpperCase()} request set to ${config.url} at ${new Date().getTime()} with headers: ${config.headers}`)
    })
}
