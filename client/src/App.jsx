import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Success from "./pages/Success";
import NewProduct from "./pages/NewProduct";
import ShopAll from "./pages/ShopAll";
import Accessories from "./pages/Accessories";
import Detail from "./pages/Detail";
import Tshirt from "./pages/Tshirt";
import Sock from "./pages/Sock";
import Page from "./pages/Page";
// import { useUser } from "./auth/useUser";

const App = () => {
  // const user = useUser();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/new">
          <NewProduct />
        </Route>
        <Route exact path="/shopall">
          <ShopAll />
        </Route>
        <Route exact path="/accessories">
          <Accessories />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
        <Route exact path="/t-shirt">
          <Tshirt />
        </Route>
        <Route exact path="/socks">
          <Sock />
        </Route>
        <Route exact path="/products/:category">
          <ProductList />
        </Route>
        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <Page />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
