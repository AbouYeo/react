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

export type { Address, User };
