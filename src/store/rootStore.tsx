import React, { createContext } from "react";
import LoginContext from "../features/authorization/signInContext";
import { SignInStoreSchema } from "../features/authorization/signInType";
import UserContext from "../features/user/userContext";
import { UserStoreSchema } from "../features/user/userType";


type RootStoreSchema = {
    loginStore: SignInStoreSchema;
    userStore: UserStoreSchema;
};

export const RootStoreContext = createContext<RootStoreSchema>(null);

const RootStore = (props : { children: React.ReactNode }) => {
    const loginContext = LoginContext();
    const userContext = UserContext();

    return (
        <RootStoreContext.Provider
            value={{
                loginStore: loginContext,
                userStore: userContext,
            }}>
            {props.children}
        </RootStoreContext.Provider>
    );
};

export default RootStore;
