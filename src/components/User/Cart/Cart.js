import "./Cart.scss";
import { useState, useEffect } from "react";
import firebase from "../../../services/firebase";
import UserContext from "../../../context/UserContext";
import { useContext } from "react";

function Cart() {
   const user = useContext(UserContext);
   const [cart, setCart] = useState([]);
   const [total, setTotal] = useState(0);

   useEffect(() => {
      firebase
         .firestore()
         .collection("cart")
         .doc(user.email)
         .get()
         .then((doc) => {
            let data = doc.data();
            setCart(data?.cart);
            let totalPrice = 0;
            data?.cart.forEach((item) => {
               totalPrice += +item.price * +item.qty;
            });
            setTotal(totalPrice);
         });
   }, [user]);
   if (cart?.length === 0) {
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
                  {cart?.map((item) => {
                     return (
                        <tr key={item.title}>
                           <td>{item.title}</td>
                           <td>{item.price}</td>
                           <td>{item.qty}</td>
                           <td>{+item.price * +item.qty}</td>
                        </tr>
                     );
                  })}
               </tbody>
               <tfoot>
                  <tr>
                     <td>------</td>
                     <td>------</td>
                     <td>------</td>
                     <td>{total}</td>
                  </tr>
               </tfoot>
            </table>
         </section>
      );
   }
}

export default Cart;
