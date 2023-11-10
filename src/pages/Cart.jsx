import React, { useContext, useState } from "react";
import { CartContext } from "../Context";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
const cartSidebar = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  width: "300px",
  position: "fixed",
  top: "50px",
  right: "0",
  height: "100%",
  background: "white",
  zIndex: 1000,
  transition: "right 0.3s ease-in-out",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
};

const closeButton = {
  width: "30px",
  height: "30px",
  fontSize: "20px",
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
};

const cartItem = {
  display: "flex",
  alignItems: "center",
  margin: "10px 0",
};

const cartImage = {
  width: "50px",
  height: "50px",
  marginRight: "10px",
  borderRadius: "20%",
};

const cartTitle = {
  fontWeight: "bold",
};

const cartPrice = {
  marginLeft: "auto",
};

const totalStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  marginTop: "20px",
};
const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState();
  const [openSidebar, setOpenSidebar] = useState(false);
  const handelClose = () => {
    setOpenSidebar(!openSidebar);
  };
  const purchaseHandler = () => {
    if (cart.length > 0) {
      alert("Thanks for purchasing!");
      setCart([]);
    } else {
      alert("Please add some items to your cart before purchasing.");
    }
  };
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  return (
    <div style={cartSidebar}>
      <button style={closeButton} onClick={handelClose}>
        X
      </button>
      <span>Cart</span>
      <br />
      {cart.map((prod) => (
        <div style={cartItem} key={prod.id}>
          <img src={prod.imageUrl} style={cartImage} alt={prod.title} />
          <span style={cartTitle}>{prod.title}</span>
          <span style={cartPrice}>{prod.price}</span>
          <Button
            bg="danger"
            variant="danger"
            onClick={() => {
              setCart(cart.filter((c) => c.id !== prod.id));
            }}
          >
            Remove
          </Button>
        </div>
      ))}
      <span style={totalStyle}>Total: {total}</span>
      <Button variant="success" onClick={purchaseHandler}>
        Purchase
      </Button>
    </div>
  );
};

export default Cart;
