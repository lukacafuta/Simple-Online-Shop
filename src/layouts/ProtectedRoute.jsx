import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


export default function ProtectedRoute() {
    const isLoggedIn = useSelector((state) => state.user.validAccessToken);

    if (isLoggedIn) {
         // if the user is logged in, we want to display the page that was requested
        return <Outlet />;
    } else {
        // if the user is not logged in, we want to redirect him to the login page
        return <Navigate to='/login' />;
    };
};