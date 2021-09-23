import logo from "./logo.svg";
import "./App.css";
import CardPage from "./Pages/CardPage";
import HomePage from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/card" component={CardPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
