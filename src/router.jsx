import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Invoice from "./pages/Invoice";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GuestLayout";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [

            {
                path:"",
                element:<Home/>
            },

            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            { path: "order", element: <Order /> },
            { path: "cart", element: <Cart /> },
            { path: "invoice", element: <Invoice /> },
            {
                path: "users",
                element: <Users />,
            },

        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {path:"home",element:<Home/>},
            { path: "signin", element: <SignIn /> },
            { path: "signup", element: <SignUp /> },
            
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    },
])

export default router