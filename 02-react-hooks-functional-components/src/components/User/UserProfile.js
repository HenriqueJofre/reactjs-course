import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile(){
    const { user } = useContext(UserContext);

    return (
        <div>
            {user ? (
                <div>
                    <h1>User Profile</h1>
                    <p>Name: {user.name}</p>
                </div>
            ) : (
                <div>
                    <p>Please login to view your profile!</p>
                </div>
            )}
        </div>
    )
}

export default UserProfile;