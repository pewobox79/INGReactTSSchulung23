import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import RootLayout from "../layouts/RootLayout";


export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<RootLayout/>}>
            <Route index element={<App/> } />
            <Route path="userdetails/:user" element={<App/>}/>
            <Route path="carsales">
                <Route path=":id" element={<h1>mycar</h1>}/>
            </Route>
        </Route>


    )
)