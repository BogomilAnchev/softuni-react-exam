import "./Details.scss";
import firebase from "../../../services/firebase";
import { useState, useEffect } from "react";

function Details({ match }) {
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
      </section>
   );
}

export default Details;
