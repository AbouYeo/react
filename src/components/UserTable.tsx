import type { User } from "../utils/types";

function UserTable(user: User) {
    return (
        <>
            <tr className="bg-fuchsia-300 border-2  ">
                <td className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                    {user.firstName}
                </td>
                <td className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                    {user.lastName}
                </td>
                <td className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                    {user.phone ? <>{user.phone}</> : null}
                </td>
                <td className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                    {user.email ? <>{user.email}</> : null}
                </td>
                <td className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                    {user.company ? <>{user.company}</> : null}
                </td>
            </tr>
        </>
    );
}

export default UserTable;
