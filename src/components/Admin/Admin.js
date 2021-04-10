import "./Admin.scss";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import CreateEditProduct from "./CreateEditProduct";
import ItemList from "../Shop/ItemList/ItemList";

function Admin({ history }) {
   const user = useContext(UserContext);

   if (!user) {
      return <Redirect to="/softuni-react-exam/login" />;
   } else {
      return (
         <section className="admin">
            <CreateEditProduct history={history} doEdit="false" />
            <h2>Edit and Delete products</h2>
            <ItemList isAdmin="true" />
         </section>
      );
   }
}

export default Admin;
