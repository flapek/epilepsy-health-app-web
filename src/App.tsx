import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/reducers";
import Body from './components/Body';
import './style/App.css'

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Header/>
          <Body/>
        </div>
      </Router>
    </Provider>
  );
}
