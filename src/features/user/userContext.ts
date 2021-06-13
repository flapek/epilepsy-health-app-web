import { User, UserStoreSchema, UserType } from "./userType";
import { useLocalObservable } from "mobx-react-lite";
import { SaveUserIdToLocalStorage } from "../../utilities/localStorageService";

const initialValues: UserType = {
  users: [
    {
      id: 1,
      email: 'test@test.com',
      firstName: 'test',
      lastName: 'test',
      password: 'test',
      age: 10,
      weight: 40
    },
    {
      id: 2,
      email: 'test2@test.com',
      firstName: 'test2',
      lastName: 'test2',
      password: 'test2',
      age: 12,
      weight: 42
    }
  ]
}
    
const UserContext = () => {
    const store = useLocalObservable<UserStoreSchema>(() => ({
    /*observables*/
    ...initialValues,

    updateUser(user: User) {
      
    },

    getUserById(id: number): User {
      return store.users.find((user) => user.id === id);
    },

    getUserByEmail(email: string): User {
      return store.users.find((user) => user.email === email);
    },

    userExist(email: string, password: string): number {
      const id: number = store.users.find((user) => user.email === email && user.password === password)?.id;
      SaveUserIdToLocalStorage(id);
      return id;
    }   
  }));

  return store;
};

export default UserContext;
