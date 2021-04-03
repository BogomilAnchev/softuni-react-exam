import { Route, Switch } from "react-router-dom";
import {useState} from 'react'

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

   const [user, setUser] = useState('');

   firebase.auth().onAuthStateChanged(user => {
      if (user) {
         setUser(user)
      } else {
         setUser('')
      }
   })

   return (
      <div className="App">
         <Header user={user}/>
         <main>
            <Switch>
               <Route path={PATH} exact component={LandingPage} />
               <Route path={`${PATH}/shop`} exact component={Shop} />
               <Route path={`${PATH}/login`} exact component={Login} />
               <Route path={`${PATH}/register`} exact component={Register} />
               <Route path={`${PATH}/profile`} exact component={Profile} />
            </Switch>
         </main>

         <Footer />
      </div>
   );
}

export default App;
