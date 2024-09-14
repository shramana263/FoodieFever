import React, { useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchUser } from '../services/user-api';
import { authLogout } from '../services/auth-api';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';

function AuthLayout() {
    const { user, token, setUser, setToken } = useStateContext();
    const [isOpen, setOpen] = useState(true);
    const navigate= useNavigate();

    const authUser = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser
        
    })
    // console.log("hello "+authUser.data.name);

    const logout = useMutation({
        mutationFn: authLogout,
        onSuccess: () => {
            setUser({});
            setToken(null);
            // toast.success("Logout Successful")
        },
        onError: (err) => {
            console.log(err);
        }
    })
    if (!token) {
        console.log("no token")
        navigate('/home')
    }
    const onLogout = (ev) => {
        ev.preventDefault();
        logout.mutate()
    };
    return (
        authUser.isLoading ? <div>loading..</div> :
            // <div
            //     id="defaultLayout"
            //     className="h-screen w-screen bg-zinc-200 dark:bg-zinc-700 overflow-y-auto"
            // >
                <div className="">
                    <Navbar
                        isOpen={isOpen}
                        setOpen={setOpen}
                        userName={authUser.data?.name}
                        onLogout={onLogout}
                    />

                    <main className="">
                        {/* <Leftbar isOpen={isOpen} /> */}
                        <Outlet />
                    </main>
                </div>
            // </div>
    );
}

export default AuthLayout
