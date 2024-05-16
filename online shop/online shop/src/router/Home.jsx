import { Link } from "react-router-dom";

export default function Home() {

    return(
        <>
            <h1>Welcome to your shopping haven</h1>
            <p>Shop smart, live joyfully, and let your style shine bright with us!</p>
            <p>
                <Link to={'/login'}>Log In</Link> to get started!
            </p>
        </>   
    );
};