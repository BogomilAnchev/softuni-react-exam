import "./Register.scss";
import firebase from "../../../services/firebase";
import { Redirect } from "react-router-dom";

function Register({ setNewUser, user }) {
   const onSubmit = (e) => {
      e.preventDefault();

      let email = e.target.email.value;
      let password = e.target.password.value;
      let name = e.target.name.value;

      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(() => {
            let currUser = firebase.auth().currentUser;

            currUser.updateProfile({
               displayName: name,
            }).then(() => {
               setNewUser(true)
            });
         })
   };

   if (user) {
      return <Redirect to="/softuni-react-exam" />;
   } else {
      return (
         <section className="register-page">
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
         </section>
      );
   }
}

export default Register;
