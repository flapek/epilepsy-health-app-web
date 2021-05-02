import React, { createContext } from "react";
import LoginContext from "../features/login/loginContext";
import { LoginStoreSchema } from "../features/login/loginType";


type RootStoreSchema = {
    loginStore: LoginStoreSchema;
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
