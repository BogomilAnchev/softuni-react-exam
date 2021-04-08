import "./ItemList.scss";
import firebase from "../../../services/firebase";
import { useState, useEffect } from "react";
import Item from '../Item/Item'

function ItemList(params) {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      firebase
         .firestore()
         .collection("products")
         .get()
         .then((data) => {
            let arr = [];
            data.forEach((doc) => {
                let info = doc.data();               
               arr.push({
                   id: doc.id,
                   info: info
               });
            });
            setProducts(arr);
         });
   }, []);

   return (
      <section className="shop-list">
         {products.map(product => {
             return <Item key={product.id} id={product.id} item={product.info} />
         })}
      </section>
   );
}

export default ItemList;
