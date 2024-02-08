import "../styles/ImageCarousel.css"
import prevIconUrl from "../assets/icon-previous.svg"
import nextIconUrl from "../assets/icon-next.svg"
import { assetsBaseUrl, product } from "../data"

export const ImageCarousel = () => {
  return (
    <div className="carousel">
      <button className="control-btn prev">
        <img src={prevIconUrl} alt="Previous icon" />
      </button>
      <div className="img-container">
        <img
          className="active"
          src="https://res.cloudinary.com/dc2c49xov/image/upload/v1703352357/ecommerce-page/image-product-1.jpg"
          alt=""
        />
      </div>
      <button className="control-btn next">
        <img src={nextIconUrl} alt="Next icon" />
      </button>
      <div className="thumbnails">
        {product.images.thumbnails.map((thumbnail, index) => {
          return (
            <button key={index}>
              <img src={`${assetsBaseUrl}/${thumbnail}`} alt="" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
