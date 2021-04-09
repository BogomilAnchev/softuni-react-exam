import "./Details.scss";
import firebase from "../../../services/firebase";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../../context/UserContext";
import { Link } from "react-router-dom";

function Details({ history, match, userCart, setUserCart }) {
   const user = useContext(UserContext);
   const [item, setItem] = useState({});

   const productId = match?.params.id;

   useEffect(() => {
      firebase
         .firestore()
         .collection("products")
         .doc(productId)
         .get()
         .then((doc) => setItem(doc.data()));
   }, [productId]);

   const addToCart = () => {
      let newCart = userCart.slice();
      let indexIfExisting = newCart.findIndex((prod) => prod.id === productId);

      if (indexIfExisting >= 0) {
         newCart[indexIfExisting].qty++;
      } else {
         item.id = productId;
         item.qty = 1;
         newCart.push(item);
      }
      setUserCart(newCart);
      firebase
         .firestore()
         .collection("cart")
         .doc(user.email)
         .set({ cart: newCart })
         .then(() => {
            history.push('/softuni-react-exam/cart')
         });
   };

   return (
      <section className="details">
         <h1>{item.title}</h1>
         <img alt="product" src={item.imageUrl}></img>
         <p>{item.description}</p>
         {user ? (
            <button onClick={addToCart}>Add to cart</button>
         ) : (
            <Link to="/softuni-react-exam/login">
               <button>Login to buy</button>
            </Link>
         )}
      </section>
   );
}

export default Details;
