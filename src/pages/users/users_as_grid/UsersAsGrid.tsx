import UserGrid from "../../../components/UserGrid";
import type { User } from "../../../utils/types";

type Props = {
    users: User[];
};
function UsersAsGrid(props: Props) {
    const users = props.users;
    return users.map((user: User) => (
        <UserGrid
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

export default UsersAsGrid;
