import "./Register.scss";
import firebase from "../../../services/firebase";
import { Redirect, Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { useContext, useState } from "react";

function Register({ updateUserDisplayNameOnRegister }) {
   const user = useContext(UserContext);
   const [errors, setErrors] = useState([]);

   const onSubmit = (e) => {
      e.preventDefault();

      let name = e.target.name.value;
      let email = e.target.email.value;
      let password = e.target.password.value;
      let repeat = e.target.repeat.value;

      let errs = [];
      let isValidEmail = /^[a-zA-Z0-9.-]{4,}@\w+\.com$/.test(email);

      if (name.length < 6) errs.push("Your name should be at least 6 chars long!");
      if (password.length < 6) errs.push("Your password should be at least 6 chars long!");
      if (repeat !== password) errs.push("Password and Repeat password should match!");
      if (!isValidEmail) errs.push("Your email should be a valid .com email");

      setErrors(errs);

      if (errs.length > 0) {
         return;
      }

      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(() => {
            let currUser = firebase.auth().currentUser;

            currUser
               .updateProfile({
                  displayName: name,
               })
               .then(() => {
                  updateUserDisplayNameOnRegister(true);
                  firebase.firestore().collection("cart").doc(email).set({ cart: [] });
                  firebase.firestore().collection("orders").doc(email).set({ orders: [] });
               });
         })
         .catch((err) => {
            setErrors([err.message]);
         });
   };

   if (user) {
      return <Redirect to="/softuni-react-exam/shop" />;
   } else {
      return (
         <section className="register-page">
            {errors.length < 1 ? (
               ""
            ) : (
               <article>
                  {errors?.map((err) => {
                     return <p className="err" key={err}>{err}</p>;
                  })}
               </article>
            )}

            <form onSubmit={onSubmit}>
               <fieldset>
                  <legend>Register Form</legend>
                  <section className="field">
                     <label htmlFor="name">Name</label>
                     <span className="input">
                        <i className="icon-user"></i>
                        <input type="text" name="name" id="name" placeholder="Name"></input>
                     </span>
                  </section>
                  <section className="field">
                     <label htmlFor="email">Email</label>
                     <span className="input">
                        <i className="icon-envelope"></i>
                        <input type="text" name="email" id="email" placeholder="email"></input>
                     </span>
                  </section>
                  <section className="field">
                     <label htmlFor="password">Password</label>
                     <span className="input">
                        <i className="icon-key"></i>
                        <input type="text" name="password" id="password" placeholder="password"></input>
                     </span>
                  </section>
                  <section className="field">
                     <label htmlFor="repeat">Repeat password</label>
                     <span className="input">
                        <i className="icon-key"></i>
                        <input type="text" name="repeat" id="repeat" placeholder="repeat password"></input>
                     </span>
                  </section>
                  <input className="button submit" type="submit" value="Register"></input>
               </fieldset>
            </form>
            <Link to="/softuni-react-exam/login">
               <p>You already have an account ? Click here to Login</p>
            </Link>
         </section>
      );
   }
}

export default Register;
