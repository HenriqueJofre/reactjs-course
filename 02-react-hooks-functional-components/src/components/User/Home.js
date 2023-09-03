import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Home(){
    const { user, login, logout } = useContext(UserContext);

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Welcome, Guest!</h2>
                    <button onClick={() => login({ name: "Henrique Jofre" })}>Login</button>
                </div>
            )}
        </div>
    )
}

export default Home;