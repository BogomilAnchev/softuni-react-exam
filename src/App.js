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
   const [user, setUser] = useState("");
   const [newUser, setNewUser] = useState(false);

   useEffect(() => {
      firebase.auth().onAuthStateChanged(setUser);
   }, [newUser]);

   return (
      <UserContext.Provider value={user}>
         <div className="App">
            <Header />
            <main>
               <Switch>
                  <Route path={PATH} exact component={LandingPage} />
                  <Route path={`${PATH}/shop`} exact component={ItemList} />
                  <Route path={`${PATH}/details/:id`} exact component={Details} />
                  <Route path={`${PATH}/login`} exact component={Login} />

                  <Route path={`${PATH}/register`} exact>
                     <Register setNewUser={setNewUser} />
                  </Route>

                  <Route path={`${PATH}/cart`} exact component={Cart} />
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
