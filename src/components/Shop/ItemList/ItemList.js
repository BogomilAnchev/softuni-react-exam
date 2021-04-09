import "./ItemList.scss";
import firebase from "../../../services/firebase";
import { useState, useEffect } from "react";
import Item from "../Item/Item";

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
                  info: info,
               });
            });
            setProducts(arr);
         });
   }, []);

   const search = (e) => {
      let searchValue = e.target.value;
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
                  info: info,
               });
            });
            let filteredProducts = arr.filter((x) => {
               return x.info.title.toLowerCase().includes(searchValue.toLowerCase());
            });
            setProducts(filteredProducts);
         });
   };

   return (
      <section className="shop-section">
         <input onKeyUp={search} type="text" placeholder="Search"></input>
         <article className="shop-section-list">
            {products.map((product) => {
               return <Item key={product.id} id={product.id} item={product.info} />;
            })}
         </article>
      </section>
   );
}

export default ItemList;
