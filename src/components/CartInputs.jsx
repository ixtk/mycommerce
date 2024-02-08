import minusIcon from "../assets/icon-minus.svg"
import plusIcon from "../assets/icon-plus.svg"
import "../styles/CartInputs.css"

export const CartInputs = () => {
  return (
    <div className="cart-inputs">
      <div className="quantity-btns">
        <button>
          <img src={minusIcon} alt="Minus icon" />
        </button>
        <span>5</span>
        <button>
          <img src={plusIcon} alt="Plus icon" />
        </button>
      </div>
      <button className="cart-btn">Add to cart</button>
    </div>
  )
}
