import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from './components/Body';
import SignIn from "./features/authorization/component/SignIn";
import SignUp from "./features/authorization/component/SignUp";
import { RootStoreContext } from "./store/rootStore";

const App = observer(() => {
  const store = useContext(RootStoreContext)
  const [isSignInPanel, setIsSignInPanel] = useState(true)

  const signInClick = (email: string, password: string): React.MouseEventHandler<HTMLButtonElement> => {
    setIsSignInPanel(true);
    store.loginStore.postSignInAction(email, password)
    return;
  }

  const signInClick2 = (): React.MouseEventHandler<HTMLButtonElement> => {
    setIsSignInPanel(true);
    return;
  }
  
  const signUpClick = (): React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement> => {
    setIsSignInPanel(false)
    return;
  }

  const before = () => {
    if (isSignInPanel)
      return <SignIn signInClick={signInClick} signUpClick={signUpClick}/>;
    else if (!isSignInPanel)
      return <SignUp signInClick={signInClick2} signUpClick={signUpClick}/>;
  };

  return (
    <React.Fragment>
      <Router>
      { store.loginStore.isLoggedIn ? (
        <Body/>
      ) : (
        before()
      )}
      </Router>
      
    </React.Fragment>
  );
});

export default App;