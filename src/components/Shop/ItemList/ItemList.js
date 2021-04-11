import "./ItemList.scss";
import firebase from "../../../services/firebase";
import { useState, useEffect, useMemo } from "react";
import Item from "../Item/Item";
import _ from 'lodash'

function ItemList({ isAdmin }) {
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

   const search = (val) => {
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
               return x.info.title.toLowerCase().includes(val.toLowerCase());
            });
            setProducts(filteredProducts);
         });
   };

   const delayedSearch = useMemo(() => _.debounce(val => search(val), 600), [])

   const onChange = e => {     
      delayedSearch(e.target.value);
    };

   

   return (
      <section className="shop-section">
         <input onKeyUp={onChange} type="text" placeholder="Search"></input>
         <article className="shop-section-list">
            {products.map((product) => {
               return <Item isAdmin={isAdmin} key={product.id} id={product.id} item={product.info} />;
            })}
         </article>
      </section>
   );
}

export default ItemList;
