import { LoginStoreSchema, LoginType } from "./loginType";
import { useLocalObservable } from "mobx-react-lite";

const initialValues: LoginType = {
  isLoading: false,
  error: "",
  isLoggedIn: false,
  myId: 0
};

const LoginContext = () => {
  async function executeAction(callback: any) {
    store.setErrorAction("");
    store.setIsLoadingAction(true);
    await callback();
    store.setIsLoadingAction(false);
    store.setIsLoggedInAction();
  }

  const store = useLocalObservable<LoginStoreSchema>(() => ({
    /*observables*/
    ...initialValues,

    setErrorAction({ message }: any) {
      store.error = message;
    },

    setIsLoadingAction(isLoading: boolean) {
      store.isLoading = isLoading;
    },

    /*asynchronous actions*/
    async postLoginAction(username: string, password: string) {
      await executeAction(async () => {
        
      });
    },

    async postChooseDeviceAction(
      username: string,
      password: string,
      selectedDeviceId: number
    ) {
      await executeAction(async () => {
        
      });
    },

    async postLogoutAction() {
      await executeAction(async () => {
        
      });
    },

    setIsLoggedInAction() {
      
    },
  }));

  return store;
};

export default LoginContext;
