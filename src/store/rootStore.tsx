import React, { createContext } from "react";
import LoginContext from "../features/authorization/signInContext";
import { SignInStoreSchema } from "../features/authorization/signInType";


type RootStoreSchema = {
    loginStore: SignInStoreSchema;
};

export const RootStoreContext = createContext<RootStoreSchema>(null);

const RootStore = (props : { children: React.ReactNode }) => {
    const loginContext = LoginContext();

    return (
        <RootStoreContext.Provider
            value={{
                loginStore: loginContext,
            }}>
            {props.children}
        </RootStoreContext.Provider>
    );
};

export default RootStore;
