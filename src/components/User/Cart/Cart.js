import "./Cart.scss";
import { useState, useEffect, useContext } from "react";
import firebase from '../../../services/firebase';
import UserContext from "../../../context/UserContext";

function Cart({ userCart, setUserCart }) {
   const user = useContext(UserContext);

   const [total, setTotal] = useState(0);

   useEffect(() => {
      let totalPrice = 0;
      userCart?.forEach((item) => {
         totalPrice += +item.price * +item.qty;
      });
      setTotal(totalPrice);
   }, [userCart]);

   const clearCart = () => {
      setUserCart([]);
      firebase.firestore().collection("cart").doc(user.email).set({ cart: [] });
   };

   if (userCart?.length === 0) {
      return <h1>You cart is empty</h1>;
   } else {
      return (
         <section className="shop-cart">
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
                        <tr key={item.title}>
                           <td>{item.title}</td>
                           <td>{Number(item.price).toFixed(2)}</td>
                           <td>{item.qty}</td>
                           <td>{(Number(item.price) * Number(item.qty)).toFixed(2)}</td>
                        </tr>
                     );
                  })}
               </tbody>
               <tfoot>
                  <tr>
                     <td>------</td>
                     <td>------</td>
                     <td>------</td>
                     <td>{total.toFixed(2)}</td>
                  </tr>
               </tfoot>
            </table>
            <button onClick={clearCart}>Clear Cart</button>
         </section>
      );
   }
}

export default Cart;
