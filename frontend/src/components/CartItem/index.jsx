import React from 'react';
import { useHistory } from 'react-router-dom';

import "./styles.scss"
import Rating from 'components/Rating';
import { url } from 'api';

function CartItem(props) {
  const { product } = props
  const history = useHistory()

  const handleClick = () => {
    history.push(`/product/${product._id}`)
  }

  return (
    <div className="cart" onClick={handleClick}>
      <div className="cart__image">
        <img src={url + product.image} alt={product.name} />
      </div>
      <div className="cart__name">
        <p>{product.name}</p>
      </div>
      <div className="cart__category">
        <p>{product.category}</p>
      </div>
      <Rating rating={product.rating} numReviews={product.numReviews} />
      <div className="cart__price">
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default CartItem;