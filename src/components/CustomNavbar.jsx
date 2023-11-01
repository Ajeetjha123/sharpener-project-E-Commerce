import { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context';
import Cart from '../pages/Cart';
const CustomNavbar = () => {
  const [cart] = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handelClick = () => {
    setIsCartOpen(!isCartOpen);
  } 
  const navLinkStyle = {
    fontWeight: 'bold',  
    marginRight: '50px', 
    color: 'white',
    textDecoration: 'none'     
  };
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
        <Container>
          <Nav className="me-auto mx-auto">
            <Link to='/home' style={navLinkStyle}>Home</Link>
            <Link to='/about' style={navLinkStyle}>About</Link>
            <Link to='/store' style={navLinkStyle}>Store</Link>
            <Link to='/contact' style={navLinkStyle}>Contact</Link>
          </Nav>
        </Container>
        <Button variant="outline-success" style={{marginRight: 40}} onClick={handelClick}>Cart {cart.length}</Button>
      </Navbar>
      {isCartOpen && <Cart />}
    </div>
  )
}

export default CustomNavbar;