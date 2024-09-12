import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { UserListPage } from "./pages/UserListPage";
import { UserPage } from "./pages/UserPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <UserListPage />,
    },
    {
        path: "/user/:id",
        element: <UserPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);