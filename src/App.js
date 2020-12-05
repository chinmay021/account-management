import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Login from "./Pages/login/Login";
import Admin from "./Pages/admin/Admin";
import Developer from "./Pages/developer/Developer";
import IndividualClub from "./Pages/IndividualClub/IndividualClub";
import { Switch, Route } from "react-router-dom";

function App() {
  const hello = 1;
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/developer" component={Developer} />
        <Route
          exact
          path="/club/:id"
          render={(props) => (
            <IndividualClub clubName={props.match.params.id} />
          )}
        />
        <Route
          exact
          path="/login/sucess/:userId"
          render={(props) => <Admin userId={props.match.params.userId} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
