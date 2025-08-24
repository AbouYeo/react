import type { User } from "../utils/types";
import UserGrid from "./UserGrid";

type Props = {
    users: User[];
};
function UsersAsGrid(props: Props) {
    const users = props.users;
    return users.map((user: User) => <UserGrid key={user.id} user={user} />);
}

export default UsersAsGrid;
