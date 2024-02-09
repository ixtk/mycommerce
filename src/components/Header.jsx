import { useEffect, useState } from "react"
import menuIconUrl from "../assets/icon-menu.svg"
import logoUrl from "../assets/logo.svg"
import { cartIcon } from "./CartIcon"
import deleteUrl from "../assets/icon-delete.svg"
import closeIcon from "../assets/icon-close.svg"
import { assetsBaseUrl, loggedInUser, product } from "../data"
import "../styles/Header.css"
import clsx from "clsx"

export const Header = () => {
  const [cartVisible, setCartVisible] = useState(false)
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  useEffect(() => {
    if (mobileMenuVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuVisible])

  return (
    <header>
      <div className="header-col">
        <button className="menu-btn" onClick={() => setMobileMenuVisible(true)}>
          <img src={menuIconUrl} alt="Menu icon" />
        </button>
        <img className="logo" src={logoUrl} alt="Sneakers logo" />
        <div className={clsx("menu", mobileMenuVisible && "visible")}>
          <nav>
            <button
              className={clsx("close-btn", mobileMenuVisible && "visible")}
              onClick={() => setMobileMenuVisible(false)}
            >
              <img src={closeIcon} alt="" />
            </button>
            <ul className="nav-list">
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <button
            className="overlay-btn"
            onClick={() => setMobileMenuVisible(false)}
          ></button>
        </div>
      </div>

      <div className="header-col cart-reference">
        <button
          className="cart-btn"
          onClick={() => setCartVisible(!cartVisible)}
        >
          {cartIcon}
        </button>
        {cartVisible && (
          <div className="cart">
            <h3>Cart</h3>
            <div className="cart-list">
              <div className="cart-item">
                <img
                  className="cart-product-img"
                  src={`${assetsBaseUrl}/${product.images.thumbnails[0]}`}
                  alt=""
                />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <span>
                    $125.00 x 3 <strong>$375.00</strong>
                  </span>
                </div>
                <button>
                  <img src={deleteUrl} alt="" />
                </button>
              </div>
              <button className="checkout-btn btn-primary">Checkout</button>
            </div>
          </div>
        )}
        <img
          className="avatar-img"
          src={`${assetsBaseUrl}/${loggedInUser.profileImage}`}
          alt="user avatar"
        />
      </div>
    </header>
  )
}
