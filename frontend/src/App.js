import { BrowserRouter, Route } from "react-router-dom"

import Header from "components/Header"
import HomeScreen from "screens/HomeScreen"
import ProductScreen from "screens/ProductScreen";
import CartScreen from "screens/CartScreen";
import SigninScreen from "screens/SigninScreen";
import RegisterScreen from "screens/RegisterScreen";
import ShippingAddressScreen from "screens/ShippingAddressScreen";
import PaymentMethodScreen from "screens/PaymentMethodScreen";
import PlaceOrderScreen from "screens/PlaceOrderScreen";
import OrderScreen from "screens/OrderScreen";
import OrderHistoryScreen from "screens/OrderHistoryScreen";
import PrivateRoute from "components/PrivateRoute";
import ProfileScreen from "screens/ProfileScreen";
import AdminRoute from "components/AdminRoute";
import CreateProductScreen from "screens/CreateProductScreen";
import DeliveryManagementScreen from "screens/DeliveryManagementScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header>
          <Header />
        </header>
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/page=:page" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={PaymentMethodScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/order-history" component={OrderHistoryScreen} />
          <PrivateRoute path="/profile" component={ProfileScreen} />
          <AdminRoute path="/createProduct" component={CreateProductScreen} />
          <AdminRoute path="/deliveryManagement" component={DeliveryManagementScreen} />
        </main>
        <footer className="center">
          All right reserved
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
