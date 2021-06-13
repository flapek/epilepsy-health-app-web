export type UserType = {
    users: User[]
};

export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    age: number;
    weight: number;
}

export type UserActionType = {
    updateUser: (user: User) => void;
    getUserById: (id: number) => User;
    getUserByEmail: (email: string) => User;
    userExist: (email: string, password: string) => number;
};

export type UserStoreSchema = {} & UserType & UserActionType