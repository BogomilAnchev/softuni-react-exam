import "./Details.scss";
import firebase from "../../../services/firebase";
import { useState, useEffect, useContext } from "react";
import UserContext from '../../../context/UserContext';
import { Link } from 'react-router-dom'

function Details({ match }) {
   const user = useContext(UserContext);

   const [item, setItem] = useState("");

   let id = match.params.id

   useEffect(() => {
      firebase
         .firestore()
         .collection("products")
         .doc(id)
         .get()
         .then((doc) => setItem(doc.data()));
   }, [id]);

   return (
      <section className="details">
         <h1>{item.title}</h1>
         <img alt="product" src={item.imageUrl}></img>
         <p>{item.description}</p>
         {user ? <button>Add to cart</button> : <Link to="/softuni-react-exam/login"><button>Login to buy</button></Link>}
         
         
      </section>
   );
}

export default Details;
