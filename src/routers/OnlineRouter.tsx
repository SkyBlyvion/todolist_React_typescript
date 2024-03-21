import { createBrowserRouter } from "react-router-dom";
import PageError from "../screens/ErrorScreens/PageError";
import App from "../App";
import Home from "../screens/OnlineScreens/Home";
import AddNote from "../screens/OnlineScreens/AddNote";
import EditNote from "../screens/OnlineScreens/EditNote";

// tableau objet declaré dans la fonction createBrowserRouter
const OnlineRouter = createBrowserRouter([
    {
        element: (
            <>
                <App />
            </>
        ),
        errorElement: <PageError />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/add-note",
                element: <AddNote />,
            },
            {
                path: "/edit-note",
                element: <EditNote />,
            }
        ],
    }
]);

export default OnlineRouter