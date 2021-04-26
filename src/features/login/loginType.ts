export type LoginType = {
    error: string;
    isLoading: boolean;
    isLoggedIn: boolean;
    myId: number,
};


export type LoginActionType = {
    setErrorAction: (error: any) => void;
    setIsLoadingAction:(isLoading: boolean) => void;
    postLoginAction: (username: string, password:string) => void;  
    postLogoutAction: () => void;  
    setIsLoggedInAction: () => void; 
};

export type LoginStoreSchema = {} & LoginType & LoginActionType