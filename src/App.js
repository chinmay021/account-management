import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Login from "./Login";
import Developer from "./Pages/developer/Developer";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/developer" component={Developer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
