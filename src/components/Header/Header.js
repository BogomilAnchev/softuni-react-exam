import { Link } from "react-router-dom";
import "./Header.scss";

function Header({ user }) {

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
               <img alt="site-logo" src="/softuni-react-exam/images.png" />
            </Link>

            {(() => {
               if (!user) {
                  return (
                     <ul>
                        <Link to="/softuni-react-exam/login">
                           <li>Login</li>
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
                        <Link to="/softuni-react-exam/logout">
                           <li>Logout</li>
                        </Link>
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
