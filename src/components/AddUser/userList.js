import React, { useContext } from "react";
import Context from "../Context";
import User from "./user";

const UserList = () => {
const {users, dispatchUserEvent} = useContext(Context);

    return(
        <div>
            <h3>Available User</h3>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

export default UserList;