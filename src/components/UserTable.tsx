import type { User } from "../utils/types";

function UserTable(user: User) {
    return (
        <>
            <tr className="bg-fuchsia-300 border-2  ">
                <td className="border-1 w-fit p-0.5 text-xs">
                    {user.firstName}
                </td>
                <td className="border-1 w-fit p-0.5 text-xs">
                    {user.lastName}
                </td>
                <td className="border-1 w-fit p-0.5 text-xs">
                    {user.phone ? <>{user.phone}</> : null}
                </td>
                <td className="border-1 w-fit p-0.5 text-xs">
                    {user.email ? <>{user.email}</> : null}
                </td>
                <td className="border-1 w-fit p-0.5 text-xs">
                    {user.company ? <>{user.company}</> : null}
                </td>
            </tr>
        </>
    );
}

export default UserTable;
