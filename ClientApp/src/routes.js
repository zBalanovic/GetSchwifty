import Home from "./pages/Home";
import Places from "./pages/Places";
import Bands from "./pages/Bands";
import { Home } from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

var routes = [
    {
        path: "/places",
        name: "Places",
        component: Places,
    },
    {
        path: "/bands",
        name: "Bands",
        component: Bands,
    },
    {
        path:"/register",
        name:"Register",
        component:Register
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    },
    {
        path: "*",
        name: "Home",
        component: Home,
    }
]

export default routes;