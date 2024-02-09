import { useState } from "react"
import "../styles/ImageCarousel.css"
import prevIconUrl from "../assets/icon-previous.svg"
import nextIconUrl from "../assets/icon-next.svg"
import { assetsBaseUrl, product } from "../data"
import clsx from "clsx"

export const ImageCarousel = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const showNextImg = () => {
    if (activeImgIndex === product.images.originals.length - 1) {
      setActiveImgIndex(0)
    } else {
      setActiveImgIndex(activeImgIndex + 1)
    }
  }

  const showPrevImg = () => {
    if (activeImgIndex === 0) {
      setActiveImgIndex(product.images.originals.length - 1)
    } else {
      setActiveImgIndex(activeImgIndex - 1)
    }
  }

  const changeImgIndex = (index) => {
    setActiveImgIndex(index)
  }

  return (
    <div className="carousel">
      <button className="control-btn prev" onClick={showPrevImg}>
        <img src={prevIconUrl} alt="Previous icon" />
      </button>
      <div className="img-container">
        <img
          className="active"
          src={`${assetsBaseUrl}/${product.images.originals[activeImgIndex]}`}
          alt=""
        />
      </div>
      <button className="control-btn next" onClick={showNextImg}>
        <img src={nextIconUrl} alt="Next icon" />
      </button>
      <div className="thumbnails">
        {product.images.thumbnails.map((thumbnail, thumbnailIndex) => {
          return (
            <button
              key={thumbnailIndex}
              className={clsx(thumbnailIndex === activeImgIndex && "active")}
              onClick={() => changeImgIndex(thumbnailIndex)}
            >
              <img src={`${assetsBaseUrl}/${thumbnail}`} alt="" />
            </button>
          )
        })}
      </div>
    </div>
  )
}
