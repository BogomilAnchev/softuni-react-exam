import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ user }) {
   return (
      <header className="header">
         <nav className="nav">
            <ul>
               <li>
                  <Link to="/softuni-react-exam">Home</Link>
               </li>
               <li>
                  <Link to="/softuni-react-exam/shop">Shop</Link>
               </li>
            </ul>

            <Link className="img" to="/softuni-react-exam">
               <img alt="site-logo" src="/softuni-react-exam/images.png" />
            </Link>

            {(() => {
               if (!user) {
                  return (
                     <ul>
                        <li>
                           <Link to="/softuni-react-exam/login">Login</Link>
                        </li>
                        <li>
                           <Link to="/softuni-react-exam/register">Register</Link>
                        </li>
                     </ul>
                  );
               } else {
                  return (
                     <ul>
                        <li>
                           <Link to="/softuni-react-exam/profile">Profile</Link>
                        </li>
                        <li>
                           <Link to="/softuni-react-exam/logout">Logout</Link>
                        </li>
                     </ul>
                  );
               }
            })()}
         </nav>
         <h3>Welcome, {!user ? "Guest :)" : user.displayName}</h3>
      </header>
   );
}

export default Header;
