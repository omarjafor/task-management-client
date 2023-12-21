import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Banner from "../Pages/Home/Banner/Banner";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '',
                element: <Banner></Banner>
            }
        ]
    },
]);

export default Router;