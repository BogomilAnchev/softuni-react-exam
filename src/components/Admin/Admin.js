import "./Admin.scss";
import CreateEditProduct from "./CreateEditProduct";
import ItemList from "../Shop/ItemList/ItemList"

function Admin({ history }) {
   return (
      <section className='admin'>
         <CreateEditProduct history={history} doEdit="false" />
         <h2>Edit and Delete products</h2>
         <ItemList isAdmin='true' />
      </section>
   );
}

export default Admin;
