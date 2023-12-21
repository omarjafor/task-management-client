import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <div> <h1 className="text-3xl font-bold underline">Taskify Pro!</h1></div>,
    },
]);

export default Router;