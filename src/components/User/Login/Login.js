import "./Login.scss";
import firebase from "../../../services/firebase";

function Login() {
   const onSubmit = (e) => {
      e.preventDefault();

      let email = e.target.email.value;
      let password = e.target.password.value;

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
          console.log(user);
      });
   };

   return (
      <section className="login-page">
         <form onSubmit={onSubmit}>
            <fieldset>
               <legend>Login</legend>
               <section className="field">
                  <label htmlFor="email">Email</label>
                  <span className="input">
                     <input type="text" name="email" id="email" placeholder="email"></input>
                     <i className="fas fa-user"></i>
                  </span>
               </section>
               <section className="field">
                  <label htmlFor="password">Password</label>
                  <span className="input">
                     <input type="text" name="password" id="password" placeholder="password"></input>
                     <i className="fas fa-key"></i>
                  </span>
               </section>
               <input className="button submit" type="submit" value="Login"></input>
            </fieldset>
         </form>
      </section>
   );
}

export default Login;
