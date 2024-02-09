import minusIcon from "../assets/icon-minus.svg"
import plusIcon from "../assets/icon-plus.svg"
import { cartIcon } from "./CartIcon"
import "../styles/CartInputs.css"

export const CartInputs = ({
  quantitySelected,
  setQuantitySelected,
  setQuantityInCart
}) => {
  const decreaseQuantity = () => {
    if (quantitySelected !== 0) {
      setQuantitySelected(quantitySelected - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantitySelected(quantitySelected + 1)
  }

  const addToCart = () => {
    setQuantityInCart((prevQuantity) => prevQuantity + quantitySelected)
    setQuantitySelected(0)
  }

  return (
    <div className="cart-inputs">
      <div className="quantity-btns">
        <button onClick={decreaseQuantity}>
          <img src={minusIcon} alt="Minus icon" />
        </button>
        <span>{quantitySelected}</span>
        <button onClick={increaseQuantity}>
          <img src={plusIcon} alt="Plus icon" />
        </button>
      </div>
      <button className="cart-btn btn-primary" onClick={addToCart}>
        {cartIcon}
        <span>Add to cart</span>
      </button>
    </div>
  )
}
