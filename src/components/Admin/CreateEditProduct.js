import "./CreateEditProduct.scss";
import firebase from "../../services/firebase";
import { useState, useEffect } from "react";

function CreateEditProduct({ match, history, doEdit }) {
   const [item, setItem] = useState({});
   const [errors, setErrors] = useState([]);

   let productId = match?.params.id;

   useEffect(() => {
      firebase
         .firestore()
         .collection("products")
         .doc(productId)
         .get()
         .then((doc) => {
            setItem(doc?.data());
         });
   }, [productId]);

   const onSubmit = (e) => {
      e.preventDefault();

      let title = e.target.title.value;
      let price = e.target.price.value;
      let imageUrl = e.target.imageUrl.value;
      let description = e.target.description.value;

      let errs = [];
      let checkIsUrlValid = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(imageUrl);

      if (title.length > 20) errs.push("Title shouldn't be longer than 20 chars!");
      if (isNaN(price) === true) errs.push("Price should be a valid number!");
      if (!checkIsUrlValid) errs.push("Image url should be a valid Url!");
      if (description.length < 50) errs.push("Description should be at least 50 chars long!")

      setErrors(errs);

      if (errs.length > 0) {
         return;
      }

      let product = {
         title,
         price,
         imageUrl,
         description,
      };

      if (doEdit === "false") {
         firebase.firestore().collection("products").add(product);
         history.push("/softuni-react-exam");
      } else {
         firebase
            .firestore()
            .doc("products/" + productId)
            .update(product);
         history.push("/softuni-react-exam/admin");
      }
   };

   return (
      <section className="create-form">
         {errors.length < 1 ? (
            ""
         ) : (
            <article>
               {errors?.map((err) => {
                  return (
                     <p className="err" key={err}>
                        {err}
                     </p>
                  );
               })}
            </article>
         )}
         <form onSubmit={onSubmit}>
            <fieldset>
               {doEdit === "false" ? <legend>Create new product</legend> : <legend>Edit {item?.title}</legend>}
               <section className="field">
                  <label htmlFor="title">Title</label>
                  <span className="input">
                     <input type="text" name="title" id="title" placeholder="Title" defaultValue={item?.title ? item.title : ""}></input>
                  </span>
               </section>
               <section className="field">
                  <label htmlFor="price">Price</label>
                  <span className="input">
                     <input type="text" name="price" id="price" placeholder="Price" defaultValue={item?.price ? item.price : ""}></input>
                  </span>
               </section>
               <section className="field">
                  <label htmlFor="imageUrl">Image URL</label>
                  <span className="input">
                     <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        placeholder="Image URL"
                        defaultValue={item?.imageUrl ? item.imageUrl : ""}
                     ></input>
                  </span>
               </section>
               <section className="field">
                  <label htmlFor="description">Description</label>
                  <span className="input">
                     <textarea
                        name="description"
                        id="description"
                        rows="5"
                        cols="70"
                        defaultValue={item?.description ? item.description : ""}
                        placeholder="Description"
                     ></textarea>
                  </span>
               </section>
               <input className="button submit" type="submit" value={doEdit === "false" ? "Create new product" : "Edit product"}></input>
            </fieldset>
         </form>
      </section>
   );
}

export default CreateEditProduct;
