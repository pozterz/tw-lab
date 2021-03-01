import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Dark } from "./Dark";
import { Presets } from "./Presets";
import { Plugins } from "./Plugins";
import { IG } from "./IG";
import { Grid } from './Grids'

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/dark" component={Dark} />
        <Route exact path="/plugins" component={Plugins} />
        <Route exact path="/presets" component={Presets} />
        <Route exact path="/ig" component={IG} />
        <Route exact path='/grid' component={Grid} />
      </Switch>
    </Router>
  );
}

export default App;
