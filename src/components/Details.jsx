import "../styles/Details.css"
import { CartInputs } from "./CartInputs"

export const ProductDetails = () => {
  return (
    <div className="description-container">
      <h2>sneaker company</h2>
      <h1 className="title">Fall Limited Edition Sneakers</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-container">
        <div>
          <span className="price">$125.00</span>
          <span className="discount-indicator">50%</span>
        </div>
        <s className="old-price">$250</s>
      </div>
      <CartInputs />
    </div>
  )
}
