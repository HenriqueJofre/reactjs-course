import React from "react";
import { UserProvider } from "./UserContext";
import Home from "./Home";
import UserProfile from "./UserProfile";

function User(){
    return (
        <UserProvider>
            <div>
                <h1>My App</h1>
                <Home />
                <UserProfile />
            </div>
        </UserProvider>
    )
}

export default User;