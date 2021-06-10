export type UserType = {
    users: User[]
};

export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    pasword: string;
    age: number;
    weight: number;
}

export type UserActionType = {
    updateUser: (user: User) => void;
    getUserById: (id: number) => User;
    getUserByEmail: (email: string) => User;
};

export type UserStoreSchema = {} & UserType & UserActionType