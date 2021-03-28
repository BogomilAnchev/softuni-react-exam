import { Route, Switch } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import Shop from "./components/Shop/Shop";

function App() {
   return (
      <div className="App">
         <Header />

         <h4>adsadsas</h4>
         <img src="softuni-react-exam/logo192.png" />

         <Switch>
            <Route path="/softuni-react-exam" exact component={LandingPage} />
            <Route path="/shop" exact component={Shop} />
         </Switch>
         <Footer />
      </div>
   );
}

export default App;
