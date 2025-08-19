import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/about/About";
import HomePage from "../pages/homepage/HomePage";
import LogIn from "../pages/login/LogIn";
import Registration from "../pages/registration/Registration";
import Users from "../pages/users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "login",
                element: <LogIn />,
            },
            {
                path: "registration",
                element: <Registration />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);
export { router };
