import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from './components/Body';
import SignIn from "./features/authorization/component/SignIn";
import SignUp from "./features/authorization/component/SignUp";
import { RootStoreContext } from "./store/rootStore";

const initialState = {
  isSignInPanel: true,
  isSignUpPanel: false,
}

const App = observer(() => {
  const store = useContext(RootStoreContext)
  const [state, setState] = useState(initialState)

  const signInClick = (): React.MouseEventHandler<HTMLButtonElement> => {
    setState({
      isSignInPanel: true,
      isSignUpPanel: false,
    })
    return;
  }
  const forgetPasswordClick = (): React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement> => {
    setState({
      isSignInPanel: false,
      isSignUpPanel: false,
    })
    return;
  }
  const signUpClick = (): React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement> => {
    setState({
      isSignInPanel: false,
      isSignUpPanel: true,
    })
    return;
  }

  const before = () => {
    if (state.isSignInPanel && !state.isSignUpPanel)
      return <SignIn signInClick={signInClick} forgetPasswordClick={forgetPasswordClick} signUpClick={signUpClick}/>;
    else if (!state.isSignInPanel && state.isSignUpPanel)
      return <SignUp signInClick={signInClick} signUpClick={signUpClick}/>;
    else
      return <div/>; 
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