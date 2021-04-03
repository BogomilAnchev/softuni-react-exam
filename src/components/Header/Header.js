import { Link } from "react-router-dom";
import "./Header.scss";
import { useState } from 'react'

function Header() {
   const [user, setUser] = useState()

   const toglleUser = () => {
      setUser((user) => user = !user)
   }

   return (
      <header className="header">
         <nav className="nav">
            <ul>
               <Link to="/softuni-react-exam">
                  <li>Home</li>
               </Link>
               <Link to="/softuni-react-exam/shop">
                  <li>Shop</li>
               </Link>
            </ul>

            <Link to="/softuni-react-exam">
               <img alt="site-logo" src="./images.png" />
            </Link>

            {(() => {
               if (!user) {
                  return (
                     <ul>
                        <Link to="/softuni-react-exam/login">
                           <li onClick={toglleUser}>Login</li>
                        </Link>
                        <Link to="/softuni-react-exam/register">
                           <li>Register</li>
                        </Link>
                     </ul>
                  );
               } else {
                  return (
                     <ul>
                        <Link to="/softuni-react-exam/profile">
                           <li>Profile</li>
                        </Link>
                        <Link>
                           <li onClick={toglleUser}>Logout</li>
                        </Link>
                     </ul>
                  );
               }
            })()}
         </nav>
         <h3>Welcome, {!user ? 'Guest :)' : 'Bogo'}</h3>
      </header>
   );
}

export default Header;
