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

function User(user: User) {
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

export default User;
