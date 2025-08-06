type User = {
    id: string;
    firstName: string;
    lastName: string;
    phone?: string;
    email?: string;
    company?: string;
    address?: Address;
};

type Address = {
    street: string;
    houseNumber: number;
    city: string;
    zipcode: number;
};

function UserTable(user: User) {
    return (
        <tr className="bg-fuchsia-300 border-3 ">
            <td className="border-3 md:p-2">{user.firstName}</td>
            <td className="border-3 md:p-2">{user.lastName}</td>
            <td className="border-3 md:p-2">
                {user.phone ? <>{user.phone}</> : null}
            </td>
            <td className="border-3 md:p-2">
                {user.email ? <>{user.email}</> : null}
            </td>
            <td className="border-3 md:p-2">
                {user.company ? <>{user.company}</> : null}
            </td>
        </tr>
    );
}

export default UserTable;
