type User = {
    id: string;
    firstName: string;
    age: number;
    lastName: string;
    gender: string;
    phone: string;
    company: string;
    email: string;
};

type Address = {
    street: string;
    houseNumber: number;
    city: string;
    zipcode: number;
};

export type { Address, User };
