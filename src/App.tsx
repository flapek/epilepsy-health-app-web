import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from './components/Body';
import SignIn from "./features/authorization/component/SignIn";
import { RootStoreContext } from "./store/rootStore";

const App = observer(() => {
  const store = useContext(RootStoreContext)
  
  return (
    <React.Fragment>
      <Router>
      { store.loginStore.isLoggedIn ? (
          <Body/>
      ) : (
        <SignIn/>
      )}
      </Router>
      
    </React.Fragment>
  );
});

export default App;