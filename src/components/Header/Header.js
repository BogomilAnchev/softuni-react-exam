import { Link } from "react-router-dom";
import './Header.scss'

function Header() {
   return (
      <header className="header">
         <Link to="/softuni-react-exam">
            <h1>Landing link here</h1>
         </Link>
         <Link to="/shop">
            <h1>Shop link here</h1>
         </Link>
     
      </header>
   );
}

export default Header;
