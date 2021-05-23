import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from './components/Body';
import SignIn from "./features/authorization/component/SignIn";
import SignUp from "./features/authorization/component/SignUp";
import useToken from "./states/useToken";

const App = observer(() => {
  const [isSignInPanel, setIsSignInPanel] = useState(true)
  const { token, setToken } = useToken();

  const signInClick = (): React.MouseEventHandler<HTMLButtonElement> => {
    setIsSignInPanel(true);
    return;
  }
  
  const signUpClick = (): React.MouseEventHandler<HTMLAnchorElement> & React.MouseEventHandler<HTMLSpanElement> => {
    setIsSignInPanel(false)
    return;
  }

  const before = () => {
    if (isSignInPanel)
      return <SignIn setToken={setToken} signUpClick={signUpClick}/>;
    else if (!isSignInPanel)
      return <SignUp signInClick={signInClick} signUpClick={signUpClick}/>;
  };

  return (
    <React.Fragment>
      <Router>
      { token ? (
        <Body setToken={setToken}/>
      ) : (
        before()
      )}
      </Router>
      
    </React.Fragment>
  );
});

export default App;