import "./Login.scss";
import firebase from "../../../services/firebase";
import { Redirect, Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { useContext, useState } from "react";

function Login() {
   const user = useContext(UserContext);
   const [error, setError] = useState();

   const onSubmit = (e) => {
      e.preventDefault();

      let email = e.target.email.value;
      let password = e.target.password.value;

      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .catch((err) => {
            if (err.code === "auth/user-not-found") setError("There is no account corresponding to this email");
            if (err.code === "auth/wrong-password") setError("Wrong password");
            console.log(err);
         });
   };

   if (user) {
      return <Redirect to="/softuni-react-exam/shop" />;
   } else {
      return (
         <section className="login-page">
            <article>
               <p className="err">{error}</p>
            </article>
            <form onSubmit={onSubmit}>
               <fieldset>
                  <legend>Login Form</legend>
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
                  <input className="button submit" type="submit" value="Login"></input>
               </fieldset>
            </form>
            <Link to="/softuni-react-exam/register">
               <p>You don't have an account ? Click here to Register</p>
            </Link>
         </section>
      );
   }
}

export default Login;
