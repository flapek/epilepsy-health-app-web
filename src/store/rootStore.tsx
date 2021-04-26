import React, { createContext } from "react";
import LoginContext from "../features/login/loginContext";
import { LoginStoreSchema } from "../features/login/loginType";


interface RootStoreSchema {
    loginStore: LoginStoreSchema;
};

export const RootStoreContext = createContext<RootStoreSchema>({
    loginStore: LoginContext()
});

const RootStore = (prop : { children: React.ReactNode }) => {
    const loginContext = LoginContext();

    return (
        <RootStoreContext.Provider
            value={{
                loginStore: loginContext,
            }}>
            {prop.children}
        </RootStoreContext.Provider>
    );
};

export default RootStore;
