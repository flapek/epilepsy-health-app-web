import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Body from './components/Body';
import './style/App.css'

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Body/>
      </div>
    </Router>
  );
}
