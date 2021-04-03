import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import firebase from "./services/firebase";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Shop from "./components/Shop/Shop";
import Login from "./components/User/Login/Login";
import Register from "./components/User/Register/Register";
import Profile from "./components/User/Profile/Profile";

const PATH = "/softuni-react-exam";

function App() {
   const [user, setUser] = useState("");

   useEffect(() => {
      firebase.auth().onAuthStateChanged(setUser)
   }, []);
   
   return (
      <div className="App">
         <Header user={user} />
         <main>
            <Switch>
               <Route path={PATH} exact component={LandingPage} />
               <Route path={`${PATH}/shop`} exact component={Shop} />

               <Route path={`${PATH}/login`} exact>
                  <Login user={user} />
               </Route>

               <Route path={`${PATH}/register`} exact>
                  <Register user={user} />
               </Route>

               <Route path={`${PATH}/profile`} exact component={Profile} />
               <Route
                  path={`${PATH}/logout`}
                  exact
                  render={(props) => {
                     firebase.auth().signOut();
                     return <Redirect to={PATH} />;
                  }}
               />
            </Switch>
         </main>

         <Footer />
      </div>
   );
}

export default App;
