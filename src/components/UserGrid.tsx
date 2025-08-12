import type { User } from "../utils/types";

function UserGrid(user: User) {
    return (
        <div className="bg-blue-200 border-2 p-2 rounded-md">
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.phone ? <>{user.phone}</> : null}</p>
            <p>{user.email ? <>{user.email}</> : null}</p>
            <p>{user.company ? <>{user.company}</> : null}</p>
        </div>
    );
}

export default UserGrid;
