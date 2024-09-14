import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/StateContext";
import Navbar from "../components/Navbar";
// import { useStateContext } from "../../contexts/ContextProvider";

// import Background from '../Site/Background'
// import Navbar from "../Site/Navbar";
// import { useStateContext } from "../contexts/ContextProvider";
// import Navbar from "../components/Navbar";

export default function GuestLayout() {
    const navigate=useNavigate()
    const { token } = useStateContext();
    if (token) {
        navigate("");
    }

    return (
        <div className="min-h-screen h-full w-screen">
            <div className="text-blue-400 hidden">For guest </div>
            {/* <Background /> */}
            <Navbar/>
            <main>
               <Outlet /> 
            </main>

            
        </div>
    );
}
