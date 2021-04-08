import { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import "./DisplayCart.scss";

function DisplayCart({ total, userCart, subOrAdd, placeOrder, clearCart }) {
   const user = useContext(UserContext);

   if (!user) {
      return <Redirect to="/softuni-react-exam/login" />;
   } else if (userCart?.length === 0) {
      return (
         <section className="shop-cart">
            <h1>You cart is empty</h1>;
         </section>
      );
   } else {
      return <section className="shop-cart">
         <h1>Check out your cart below</h1>
         <table>
            <thead>
               <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
               </tr>
            </thead>
            <tbody>
               {userCart?.map((item) => {
                  return (
                     <tr key={item.id}>
                        <td>
                           <Link to={`/softuni-react-exam/details/${item.id}`}>{item.title}</Link>
                        </td>
                        <td>{Number(item.price).toFixed(2)}$</td>
                        <td>
                           <span onClick={() => subOrAdd(item.id, "sub")} className="qty">
                              -
                           </span>
                           {item.qty}
                           <span onClick={() => subOrAdd(item.id, "add")} className="qty">
                              +
                           </span>
                        </td>
                        <td>{(Number(item.price) * Number(item.qty)).toFixed(2)}$</td>
                     </tr>
                  );
               })}
            </tbody>
            <tfoot>
               <tr>
                  <td>------</td>
                  <td>------</td>
                  <td>------</td>
                  <th>{total.toFixed(2)}$</th>
               </tr>
            </tfoot>
         </table>
         <section className="actions">
            <button onClick={clearCart}>Clear Cart</button>
            <button onClick={placeOrder}>Order Now</button>
         </section>
      </section>;
   }
}

export default DisplayCart;
