import "./Login.scss";
import firebase from "../../../services/firebase";
import { Redirect } from "react-router-dom";

function Login({ user }) {
   const onSubmit = (e) => {
      e.preventDefault();

      let email = e.target.email.value;
      let password = e.target.password.value;

      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
   };

   if (user) {
      return <Redirect to="/softuni-react-exam" />;
   } else {
      return (
         <section className="login-page">
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
         </section>
      );
   }
}

export default Login;
