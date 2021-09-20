import logo from './logo.svg';
import './App.css';
import MainContentBlock from "./components/MainContentBlock";
import { BrowserRouter as Router, Switch, Route , Redirect} from "react-router-dom";
import Header from "./components/Header/index"
function App() {
  return (
    <div className='wrapper'>
    <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={MainContentBlock} />
    <Redirect to='/' />
    </Switch>
      </Router>
      </div>
    /*<div className="App">
      <CardHolder/>
    </div>*/
  );
}

export default App;
