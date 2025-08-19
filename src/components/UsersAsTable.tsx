import type { User } from "../utils/types";
import UserTable from "./UserTable";

type Props = {
    users: User[];
};
function UsersAsTable(props: Props) {
    const users = props.users;
    return (
        <table>
            <thead>
                <tr className="bg-fuchsia-300 border-2">
                    <th className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                        Prénom
                    </th>
                    <th className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                        Nom
                    </th>
                    <th className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                        Telephone
                    </th>
                    <th className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                        Email
                    </th>
                    <th className="border-2 w-fit p-2 md:px-5 md:text-2xl">
                        Employeur
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user: User) => (
                    <UserTable
                        key={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        id={user.id}
                        email={user.email}
                        company={user.company}
                        address={user.address}
                        phone={user.phone}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default UsersAsTable;
