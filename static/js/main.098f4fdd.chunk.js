(this["webpackJsonpreact-exam-app"]=this["webpackJsonpreact-exam-app"]||[]).push([[0],{33:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),r=c(26),a=c.n(r),i=c(5),o=(c(33),c(18)),l=c(13),j=c(6),d=c(22);c(34),c(54);d.a.initializeApp({apiKey:"AIzaSyAXlhk_tqZeTzWvWFhbWWjHpx1RjElaEEk",authDomain:"angular-exam-bea50.firebaseapp.com",projectId:"angular-exam-bea50",storageBucket:"angular-exam-bea50.appspot.com",messagingSenderId:"356341360116",appId:"1:356341360116:web:f62528b7b03b85f94a05a1"});var b=d.a,u=n.a.createContext(),h=(c(37),c(38),c(1));var x=function(){var e=Object(s.useContext)(u);return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/softuni-react-exam/shop",children:"Shop"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/softuni-react-exam",children:"About us"})})]}),Object(h.jsx)(i.b,{className:"img",to:"/softuni-react-exam",children:Object(h.jsx)("img",{alt:"site-logo",src:"/softuni-react-exam/images.png"})}),e?Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/softuni-react-exam/profile",children:"Profile"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/softuni-react-exam/logout",children:"Logout"})})]}):Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/softuni-react-exam/login",children:"Login"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/softuni-react-exam/register",children:"Register"})})]})]}),Object(h.jsxs)("h3",{children:["Welcome, ",e?e.displayName:"Guest :)"]}),e?Object(h.jsx)("h3",{className:"cart",children:Object(h.jsx)(i.b,{className:"cart-a",to:"/softuni-react-exam/cart",children:"Shopping Cart"})}):""]})};c(44);var O=function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("p",{children:"Simple e-commerce app to serve as an exam breaker @ Softuni Bulgaria... and all hail React :)"})})};c(45);var m=function(){return Object(h.jsx)("h1",{children:"LandingPage here"})};c(46),c(47);var p=function(e){var t=e.item,c=e.id;return Object(h.jsx)("section",{className:"shop-item",children:Object(h.jsxs)(i.b,{to:"/softuni-react-exam/details/".concat(c),children:[Object(h.jsx)("h2",{children:t.title}),Object(h.jsxs)("h4",{children:[t.price,"$"]}),Object(h.jsx)("img",{alt:"",src:t.imageUrl})]})})};var f=function(e){var t=Object(s.useState)([]),c=Object(l.a)(t,2),n=c[0],r=c[1];return Object(s.useEffect)((function(){b.firestore().collection("products").get().then((function(e){var t=[];e.forEach((function(e){var c=e.data();t.push({id:e.id,info:c})})),r(t)}))}),[]),Object(h.jsxs)("section",{className:"shop-section",children:[Object(h.jsx)("input",{onKeyUp:function(e){var t=e.target.value;b.firestore().collection("products").get().then((function(e){var c=[];e.forEach((function(e){var t=e.data();c.push({id:e.id,info:t})}));var s=c.filter((function(e){return e.info.title.toLowerCase().includes(t.toLowerCase())}));r(s)}))},type:"text",placeholder:"Search"}),Object(h.jsx)("article",{className:"shop-section-list",children:n.map((function(e){return Object(h.jsx)(p,{id:e.id,item:e.info},e.id)}))})]})};c(48);var v=function(){return Object(s.useContext)(u)?Object(h.jsx)(j.a,{to:"/softuni-react-exam/shop"}):Object(h.jsxs)("section",{className:"login-page",children:[Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.email.value,c=e.target.password.value;b.auth().signInWithEmailAndPassword(t,c)},children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Login Form"}),Object(h.jsxs)("section",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsxs)("span",{className:"input",children:[Object(h.jsx)("i",{className:"icon-envelope"}),Object(h.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"email"})]})]}),Object(h.jsxs)("section",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsxs)("span",{className:"input",children:[Object(h.jsx)("i",{className:"icon-key"}),Object(h.jsx)("input",{type:"text",name:"password",id:"password",placeholder:"password"})]})]}),Object(h.jsx)("input",{className:"button submit",type:"submit",value:"Login"})]})}),Object(h.jsx)(i.b,{to:"/softuni-react-exam/register",children:Object(h.jsx)("p",{children:"You don't have an account ? Click here to Register"})})]})};c(49);var g=function(e){var t=e.updateUserDisplayNameOnRegister;return Object(s.useContext)(u)?Object(h.jsx)(j.a,{to:"/softuni-react-exam/shop"}):Object(h.jsxs)("section",{className:"register-page",children:[Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var c=e.target.email.value,s=e.target.password.value,n=e.target.name.value;b.auth().createUserWithEmailAndPassword(c,s).then((function(){b.auth().currentUser.updateProfile({displayName:n}).then((function(){t(!0),b.firestore().collection("cart").doc(c).set({cart:[]}),b.firestore().collection("orders").doc(c).set({orders:[]})}))}))},children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Register Form"}),Object(h.jsxs)("section",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Name"}),Object(h.jsxs)("span",{className:"input",children:[Object(h.jsx)("i",{className:"icon-user"}),Object(h.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Name"})]})]}),Object(h.jsxs)("section",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsxs)("span",{className:"input",children:[Object(h.jsx)("i",{className:"icon-envelope"}),Object(h.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"email"})]})]}),Object(h.jsxs)("section",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsxs)("span",{className:"input",children:[Object(h.jsx)("i",{className:"icon-key"}),Object(h.jsx)("input",{type:"text",name:"password",id:"password",placeholder:"password"})]})]}),Object(h.jsxs)("section",{className:"field",children:[Object(h.jsx)("label",{htmlFor:"repeat",children:"Repeat password"}),Object(h.jsxs)("span",{className:"input",children:[Object(h.jsx)("i",{className:"icon-key"}),Object(h.jsx)("input",{type:"text",name:"repeat",id:"repeat",placeholder:"repeat password"})]})]}),Object(h.jsx)("input",{className:"button submit",type:"submit",value:"Register"})]})}),Object(h.jsx)(i.b,{to:"/softuni-react-exam/login",children:Object(h.jsx)("p",{children:"You already have an account ? Click here to Login"})})]})};c(50);var N=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(s.useContext)(u);return Object(s.useEffect)((function(){r&&b.firestore().collection("orders").doc(r.email).get().then((function(e){var t=e.data();n(null===t||void 0===t?void 0:t.orders)}))}),[r]),r?Object(h.jsxs)("section",{className:"profile",children:[Object(h.jsx)("h1",{children:"Check out your profile info and orders below"}),Object(h.jsxs)("h3",{children:["You email: ",r.email]}),Object(h.jsxs)("h3",{children:["Your name: ",r.displayName]}),null===c||void 0===c?void 0:c.map((function(e,t){return Object(h.jsxs)("div",{className:"order",children:[Object(h.jsxs)("h4",{children:["Order No",t+1," placed on ",e.date,", Total amount: ",Number(e.total).toFixed(2),"$"]}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Quantity"}),Object(h.jsx)("th",{children:"Total"})]})}),Object(h.jsx)("tbody",{children:e.products.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.title}),Object(h.jsxs)("td",{children:[e.price,"$"]}),Object(h.jsx)("td",{children:e.qty}),Object(h.jsxs)("td",{children:[(Number(e.price)*Number(e.qty)).toFixed(2),"$"]})]},e.id)}))}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"------"}),Object(h.jsx)("td",{children:"------"}),Object(h.jsx)("td",{children:"------"}),Object(h.jsxs)("th",{children:[e.total,"$"]})]})})]})]},e.date)}))]}):Object(h.jsx)(j.a,{to:"/softuni-react-exam"})};c(51);var y=function(e){var t=e.history,c=e.match,n=e.userCart,r=e.setUserCart,a=Object(s.useContext)(u),o=Object(s.useState)({}),j=Object(l.a)(o,2),d=j[0],x=j[1],O=null===c||void 0===c?void 0:c.params.id;return Object(s.useEffect)((function(){b.firestore().collection("products").doc(O).get().then((function(e){return x(e.data())}))}),[O]),Object(h.jsxs)("section",{className:"details",children:[Object(h.jsx)("h1",{children:d.title}),Object(h.jsx)("img",{alt:"product",src:d.imageUrl}),Object(h.jsx)("p",{children:d.description}),a?Object(h.jsx)("button",{onClick:function(){var e=n.slice(),c=e.findIndex((function(e){return e.id===O}));c>=0?e[c].qty++:(d.id=O,d.qty=1,e.push(d)),r(e),b.firestore().collection("cart").doc(a.email).set({cart:e}).then((function(){t.push("/softuni-react-exam/cart")}))},children:"Add to cart"}):Object(h.jsx)(i.b,{to:"/softuni-react-exam/login",children:Object(h.jsx)("button",{children:"Login to buy"})})]})};c(52);var C=function(e){var t=e.total,c=e.userCart,n=e.subOrAdd,r=e.placeOrder,a=e.clearCart;return Object(s.useContext)(u)?0===(null===c||void 0===c?void 0:c.length)?Object(h.jsx)("section",{className:"shop-cart",children:Object(h.jsx)("h1",{children:"You cart is empty"})}):Object(h.jsxs)("section",{className:"shop-cart",children:[Object(h.jsx)("h1",{children:"Check out your cart below"}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Price"}),Object(h.jsx)("th",{children:"Quantity"}),Object(h.jsx)("th",{children:"Total"})]})}),Object(h.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)(i.b,{to:"/softuni-react-exam/details/".concat(e.id),children:e.title})}),Object(h.jsxs)("td",{children:[Number(e.price).toFixed(2),"$"]}),Object(h.jsxs)("td",{children:[Object(h.jsx)("span",{onClick:function(){return n(e.id,"sub")},className:"qty",children:"-"}),e.qty,Object(h.jsx)("span",{onClick:function(){return n(e.id,"add")},className:"qty",children:"+"})]}),Object(h.jsxs)("td",{children:[(Number(e.price)*Number(e.qty)).toFixed(2),"$"]})]},e.id)}))}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"------"}),Object(h.jsx)("td",{children:"------"}),Object(h.jsx)("td",{children:"------"}),Object(h.jsxs)("th",{children:[t.toFixed(2),"$"]})]})})]}),Object(h.jsxs)("section",{className:"actions",children:[Object(h.jsx)("button",{onClick:a,children:"Clear Cart"}),Object(h.jsx)("button",{onClick:r,children:"Order Now"})]})]}):Object(h.jsx)(j.a,{to:"/softuni-react-exam/login"})};var w=function(e){var t=e.history,c=e.userCart,n=e.setUserCart,r=Object(s.useContext)(u),a=Object(s.useState)(0),i=Object(l.a)(a,2),o=i[0],j=i[1];Object(s.useEffect)((function(){var e=0;null===c||void 0===c||c.forEach((function(t){e+=+t.price*+t.qty})),j(e)}),[c]);var d=function(){n([]),b.firestore().collection("cart").doc(r.email).set({cart:[]})};return Object(h.jsx)("section",{children:Object(h.jsx)(C,{total:o,userCart:c,subOrAdd:function(e,t){var s=c.slice(),a=s.findIndex((function(t){return t.id===e}));"sub"===t?(s[a].qty--,j((function(e){var t;return e-+(null===(t=s[a])||void 0===t?void 0:t.price)})),0===s[a].qty&&s.splice(a,1)):(s[a].qty++,j((function(e){return e+ +s[a].price}))),n(s),b.firestore().collection("cart").doc(r.email).set({cart:s})},placeOrder:function(){var e=new Date,s=e.toISOString().slice(0,10),n=e.toISOString().slice(11,19),a={total:o.toFixed(2),date:"On ".concat(s," at ").concat(n),products:c};b.firestore().collection("orders").doc(r.email).get().then((function(e){var c=e.data().orders;c.push(a),b.firestore().collection("orders").doc(r.email).set({orders:c}),d(),t.push("/softuni-react-exam/profile")}))},clearCart:d})})},S="/softuni-react-exam";var F=function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!1),a=Object(l.a)(r,2),i=a[0],d=a[1],p=Object(s.useState)([]),C=Object(l.a)(p,2),F=C[0],k=C[1];return Object(s.useEffect)((function(){b.auth().onAuthStateChanged(n)}),[i]),Object(s.useEffect)((function(){c&&b.firestore().collection("cart").doc(c.email).get().then((function(e){var t=e.data();k(null===t||void 0===t?void 0:t.cart)}))}),[c]),Object(h.jsx)(u.Provider,{value:c,children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsx)("main",{children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{path:S,exact:!0,component:m}),Object(h.jsx)(j.b,{path:"".concat(S,"/shop"),exact:!0,component:f}),Object(h.jsx)(j.b,{path:"".concat(S,"/details/:id"),exact:!0,render:function(e){return Object(h.jsx)(y,Object(o.a)(Object(o.a)({},e),{},{userCart:F,setUserCart:k}))}}),Object(h.jsx)(j.b,{path:"".concat(S,"/login"),exact:!0,component:v}),Object(h.jsx)(j.b,{path:"".concat(S,"/register"),exact:!0,children:Object(h.jsx)(g,{updateUserDisplayNameOnRegister:d})}),Object(h.jsx)(j.b,{path:"".concat(S,"/cart"),exact:!0,render:function(e){return Object(h.jsx)(w,Object(o.a)(Object(o.a)({},e),{},{setUserCart:k,userCart:F}))}}),Object(h.jsx)(j.b,{path:"".concat(S,"/profile"),exact:!0,component:N}),Object(h.jsx)(j.b,{path:"".concat(S,"/logout"),exact:!0,render:function(){return b.auth().signOut(),Object(h.jsx)(j.a,{to:S})}})]})}),Object(h.jsx)(O,{})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(i.a,{children:Object(h.jsx)(F,{})})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.098f4fdd.chunk.js.map