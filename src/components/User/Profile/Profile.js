import "./Profile.scss";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import firebase from "../../../services/firebase";
import { Redirect } from "react-router-dom";

function Profile() {
   const [orders, setOrders] = useState([]);

   const user = useContext(UserContext);

   useEffect(() => {
      if (!user) return;
      firebase
         .firestore()
         .collection("orders")
         .doc(user.email)
         .get()
         .then((doc) => {
            let data = doc.data();
            setOrders(data?.orders);
         });
   }, [user]);

   if (!user) {
       return (
           <Redirect to="/softuni-react-exam" />
       )
   } else {
      return (
         <section className="profile">
            <h1>Check out your profile info and orders below</h1>
            <h3>You email: {user.email}</h3>
            <h3>Your name: {user.displayName}</h3>
            {orders?.map((order, i) => {
               return (
                  <div key={order.date} className="order">
                     <h4>
                        Order No{i + 1} placed on {order.date}, Total amount: {Number(order.total).toFixed(2)}$
                     </h4>
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
                           {order.products.map((product) => {
                              return (
                                 <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.price}$</td>
                                    <td>{product.qty}</td>
                                    <td>{(Number(product.price) * Number(product.qty)).toFixed(2)}$</td>
                                 </tr>
                              );
                           })}
                        </tbody>
                        <tfoot>
                           <tr>
                              <td>------</td>
                              <td>------</td>
                              <td>------</td>
                              <th>{order.total}$</th>
                           </tr>
                        </tfoot>
                     </table>
                  </div>
               );
            })}
         </section>
      );
   }
}

export default Profile;
