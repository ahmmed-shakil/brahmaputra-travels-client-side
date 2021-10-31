
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import AddNewService from './pages/AddNewService/AddNewService';
import Tours from './pages/Tours/Tours/Tours';
import AuthProvider from './context/AuthProvider';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import MyOrders from './pages/MyOrders/MyOrders/MyOrders';
import ManageOrders from './pages/ManageOrders/ManageOrders/ManageOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/tours'>
              <Tours></Tours>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <SignIn></SignIn>
            </Route>
            <Route path='/myorders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/manage'>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path='/add'>
              <AddNewService></AddNewService>
            </Route>
            <PrivateRoute path='/place-order/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
