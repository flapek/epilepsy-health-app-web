import { SignInStoreSchema, SignInType } from "./signInType";
import { useLocalObservable } from "mobx-react-lite";

const initialValues: SignInType = {
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
  }

  const store = useLocalObservable<SignInStoreSchema>(() => ({
    /*observables*/
    ...initialValues,

    setErrorAction({ message }: any) {
      store.error = message;
    },

    setIsLoadingAction(isLoading: boolean) {
      store.isLoading = isLoading;
    },

    /*asynchronous actions*/
    async postSignInAction(email: string, password: string) {
      await executeAction(async () => {
        store.setIsLoggedInAction(true);
      });
    },

    async postSignOutAction() {
      await executeAction(async () => {
        store.setIsLoggedInAction(false);
      });
    },

    setIsLoggedInAction(value: boolean) {
      store.isLoggedIn = value;
    },
  }));

  return store;
};

export default LoginContext;
