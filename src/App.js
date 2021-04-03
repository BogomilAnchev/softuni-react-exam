import { Route, Switch } from "react-router-dom";

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
   return (
      <div className="App">
         <Header />
         <Switch>
            <Route path={PATH} exact component={LandingPage} />
            <Route path={`${PATH}/shop`} exact component={Shop} />
            <Route path={`${PATH}/login`} exact component={Login} />
            <Route path={`${PATH}/register`} exact component={Register} />
            <Route path={`${PATH}/profile`} exact component={Profile} />
         </Switch>
         <Footer />
      </div>
   );
}

export default App;
