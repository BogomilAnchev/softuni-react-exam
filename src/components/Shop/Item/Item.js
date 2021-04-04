import "./Item.scss";
import { Link } from "react-router-dom";

function Item({ item, id }) {
   return (
      <section className="shop-item">
         <Link to={`/softuni-react-exam/details/${id}`}>
            <h2>{item.title}</h2>
            <h4>{item.price}$</h4>
            <img alt="" src={item.imageUrl}></img>
         </Link>
      </section>
   );
}

export default Item;
