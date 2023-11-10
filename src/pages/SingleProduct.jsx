import { useContext } from "react";
import { CartContext } from "../Context";
import "./style.css";
import { Button } from "react-bootstrap";
const SingleProduct = ({ prod }) => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="products">
      <span style={{ fontWeight: 700, textAlign: "center" }}>{prod.title}</span>
      <img src={prod.imageUrl} alt={prod.title} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>${prod.price}</span>
      </div>
      {cart.includes(prod) ? (
        <Button
          className="add"
          onClick={() => {
            alert("This item is already added to the cart");
          }}
        >
          Add To Cart
        </Button>
      ) : (
        <Button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add To Cart
        </Button>
      )}
    </div>
  );
};

export default SingleProduct;
