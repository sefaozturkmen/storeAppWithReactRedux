import "./App.css";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "./components/navi/Navi";
import { Route, Switch } from "react-router";
import CartDetail from "./components/cart/CartDetail";


function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/products" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetail} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
