export type SignInType = {
    error: string;
    isLoading: boolean;
    isLoggedIn: boolean;
    myId: number,
};

export type SignInActionType = {
    setErrorAction: (error: any) => void;
    setIsLoadingAction:(isLoading: boolean) => void;
    postSignInAction: (email: string, password:string) => void;  
    postSignOutAction: () => void;  
    setIsLoggedInAction: () => void; 
};

export type SignInStoreSchema = {} & SignInType & SignInActionType