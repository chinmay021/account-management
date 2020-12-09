import "./App.css";

import Home from "./Home";
import Nav from "./Nav";
import Footer from "./Footer";
import Login from "./Pages/login/Login";
import Admin from "./Pages/admin/Admin";
import Developer from "./Pages/developer/Developer";
import IndividualClub from "./Pages/IndividualClub/IndividualClub";
import { Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import AllTransactions from "./Pages/admin/AllTransactions";
import { AddMembers, RemoveMembers } from "./Pages/admin/ManageMembers";
function App() {
  return (
    <GlobalProvider>
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
          {/* <Route
          exact
          path="/login/sucess/:userId"
          render={(props) => <Admin userId={props.match.params.userId} />}
        /> */}
          <Route
            exact
            path="/login/sucess/:id"
            render={(props) => <Admin clubName={props.match.params.id} />}
          />
          <Route
            exact
            path={`/login/sucess/${sessionStorage.getItem(
              "clubName"
            )}/add_member`}
            component={AddMembers}
          />
          <Route
            exact
            path={`/login/sucess/${sessionStorage.getItem(
              "clubName"
            )}/remove_member`}
            component={RemoveMembers}
          />
          <Route
            exact
            path={`/login/sucess/${sessionStorage.getItem(
              "clubName"
            )}/transactions`}
            component={AllTransactions}
          />
        </Switch>
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
