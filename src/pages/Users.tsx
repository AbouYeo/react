import User from "../components/User";

type Props = {
    users: User[];
};
function Users(props: Props) {
    const users = props.users;
    return users.map((user: User) => (
        <User
            firstName={user.firstName}
            lastName={user.lastName}
            id={user.id}
            email={user.email}
            company={user.company}
            address={user.address}
            phone={user.phone}
        />
        // <UserTable
        //     firstName={user.firstName}
        //     lastName={user.lastName}
        //     id={user.id}
        //     email={user.email}
        //     company={user.company}
        //     address={user.address}
        //     phone={user.phone}
        // />
    ));
}

export default Users;
