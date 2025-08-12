import UserTable from "../../../components/UserTable";
import type { User } from "../../../utils/types";

type Props = {
    users: User[];
};
function UsersAsTable(props: Props) {
    const users = props.users;
    return users.map((user: User) => (
        <UserTable
            firstName={user.firstName}
            lastName={user.lastName}
            id={user.id}
            email={user.email}
            company={user.company}
            address={user.address}
            phone={user.phone}
        />
    ));
}

export default UsersAsTable;
