import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import Careers from "../Pages/Careers/Careers";
import Projects from "../Pages/Projects/Projects";
import Blog from "../Pages/Blog/Blog";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'careers',
                element: <Careers></Careers>
            },
            {
                path: 'projects',
                element: <Projects></Projects>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
]);

export default Router;