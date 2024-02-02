import menuIconUrl from "../../assets/icon-menu.svg"
import logoUrl from "../../assets/logo.svg"
import cartUrl from "../../assets/icon-cart.svg"
import { assetsBaseUrl, loggedInUser } from "../../data"
import "./Header.css"

export const Header = () => {
  return (
    <header>
      <div className="header-col">
        <button className="menu-btn">
          <img src={menuIconUrl} alt="Menu icon" />
        </button>
        <img className="logo" src={logoUrl} alt="Sneakers logo" />
        <nav>
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
      </div>

      <div className="header-col">
        <button className="cart-btn">
          <img src={cartUrl} alt="cart icon" />
        </button>
        <img
          className="avatar-img"
          src={`${assetsBaseUrl}/${loggedInUser.profileImage}`}
          alt="user avatar"
        />
      </div>
    </header>
  )
}
