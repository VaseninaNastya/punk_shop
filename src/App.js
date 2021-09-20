import logo from './logo.svg';
import './App.css';
import CardHolder from "./components/CardHolder";
import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom";
import Header from "./components/Header/index"
function App() {
  return (
    <>
    <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={CardHolder} />
    <Redirect to='/' />
    </Switch>
      </Router>
      </>
    /*<div className="App">
      <CardHolder/>
    </div>*/
  );
}

export default App;
