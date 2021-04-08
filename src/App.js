import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import firebase from "./services/firebase";

import UserContext from "./context/UserContext";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import ItemList from "./components/Shop/ItemList/ItemList";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";
import Profile from "./components/User/Profile/Profile";
import Details from "./components/Shop/Details/Details";
import Cart from "./components/User/Cart/Cart";

const PATH = "/softuni-react-exam";

function App() {
   const [user, setUser] = useState({});
   const [newUser, setNewUser] = useState(false);
   const [userCart, setUserCart] = useState([]);

   useEffect(() => {
      firebase.auth().onAuthStateChanged(setUser);
   }, [newUser]);

   useEffect(() => {
      if (!user) return
      firebase
         .firestore()
         .collection("cart")
         .doc(user.email)
         .get()
         .then((doc) => {
            let data = doc.data();
            setUserCart(data?.cart);
         });
   }, [user]);

   return (
      <UserContext.Provider value={user}>
         <div className="App">
            <Header />
            <main>
               <Switch>
                  <Route path={PATH} exact component={LandingPage} />

                  <Route path={`${PATH}/shop`} exact component={ItemList} />

                  <Route path={`${PATH}/details/:id`} exact render={(props) => {
                     return <Details {...props} userCart={userCart} setUserCart={setUserCart} ></Details>
                  }}/>
                     
                  <Route path={`${PATH}/login`} exact component={Login} />

                  <Route path={`${PATH}/register`} exact>
                     <Register updateUserDisplayNameOnRegister={setNewUser} />
                  </Route>

                  <Route path={`${PATH}/cart`} exact>
                     <Cart setUserCart={setUserCart} userCart={userCart}></Cart>
                  </Route>

                  <Route path={`${PATH}/profile`} exact component={Profile} />

                  <Route
                     path={`${PATH}/logout`}
                     exact
                     render={() => {
                        firebase.auth().signOut();
                        return <Redirect to={PATH} />;
                     }}
                  />
               </Switch>
            </main>

            <Footer />
         </div>
      </UserContext.Provider>
   );
}

export default App;
