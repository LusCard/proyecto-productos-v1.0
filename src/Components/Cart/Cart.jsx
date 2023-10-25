import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Cart.css';
import { CartIcon, ClearCartIcon } from '../Icons';
import { useCart } from '../../hooks/useCart.js';

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className='container text-center row justify-content-center'>
      <img className='cart-image' src={thumbnail} alt={title} />
      <div>
        <strong className='text-white'>{title}</strong>
        <p className='text-white'> - ${price}</p>
      </div>
      <footer>
        <small className='text-white'>Cantidad: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
function Cart() {
  const [show, setShow] = useState(false);
  const { cart, clearCart, addToCart } = useCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        <CartIcon />
      </button>

      <Modal show={show} onHide={handleClose} size="lg" scrollable>
        <Modal.Header className='bg-dark text-white' closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'black', maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
          <ul className='bg-black list-unstyled'>
            {cart.map((product) => (
              <CartItem 
              key={product.id} 
              addToCart={() => addToCart(product)} {...product} />
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="danger" onClick={clearCart}>
            <ClearCartIcon /> Clear Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
//     <ul className='bg-black list-unstyled'>
// {cart.map((product) => (
//   <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
// ))}
// </ul>