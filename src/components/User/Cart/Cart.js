import "./Cart.scss";
import { Link, Redirect } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import firebase from "../../../services/firebase";

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

   const placeOrder = () => {
      let date = new Date();
      let currDate = date.toISOString().slice(0, 10);
      let currTime = date.toISOString().slice(11, 19);
      let newOrder = {
         total: total.toFixed(2),
         date: `On ${currDate} at ${currTime}`,
         products: userCart,
      };

      firebase
         .firestore()
         .collection("orders")
         .doc(user.email)
         .get()
         .then((orders) => {
            let oldOrders = orders.data();
            let newOrders = oldOrders.orders;
            newOrders.push(newOrder);

            firebase.firestore().collection("orders").doc(user.email).set({ orders: newOrders });
            clearCart();
         });
   };

   const subOrAdd = (id, action) => {
      let newCart = userCart.slice();
      let index = newCart.findIndex((prod) => prod.id === id);

      if (action === "sub") {
         newCart[index].qty--;
         setTotal((old) => (old -= +newCart[index].price));

         if (newCart[index].qty === 0) {
            newCart.splice(index, 1);
         }
      } else {
         newCart[index].qty++;
         setTotal((old) => (old += +newCart[index].price));
      }

      setUserCart(newCart);
      firebase.firestore().collection("cart").doc(user.email).set({ cart: newCart });
   };

   if (!user) {
      return <Redirect to="/softuni-react-exam/login"/>
   } else if (userCart?.length === 0) {
      return (
         <section className="shop-cart">
            <h1>You cart is empty</h1>;
         </section>
      );
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
         </section>
      );
   }
}

export default Cart;
