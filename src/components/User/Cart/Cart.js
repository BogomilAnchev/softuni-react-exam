import { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import firebase from "../../../services/firebase";
import DisplayCart from "./DisplayCart";

function Cart({ history, userCart, setUserCart }) {
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
            history.push('/softuni-react-exam/profile')
         });
   };

   const subOrAdd = (id, action) => {
      let newCart = userCart.slice();
      let index = newCart.findIndex((prod) => prod.id === id);

      if (action === "sub") {
         newCart[index].qty--;
         setTotal((old) => (old -= +newCart[index]?.price));

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

   return (
      <section>
         <DisplayCart total={total} userCart={userCart} subOrAdd={subOrAdd} placeOrder={placeOrder} clearCart={clearCart}></DisplayCart>
      </section>
   );
}

export default Cart;
