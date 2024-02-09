import { product, loggedInUser, assetsBaseUrl } from "../data"
import userPlaceholderImg from "../assets/user-placeholder.png"
import "../styles/Reviews.css"
import { StarRating } from "./StarRating"

export const ReviewList = () => {
  return (
    <div className="review-list">
      {product.reviews.map((review, index) => {
        return (
          <div className="review" key={index}>
            <img
              src={
                loggedInUser.name === review.user
                  ? `${assetsBaseUrl}/${loggedInUser.profileImage}`
                  : userPlaceholderImg
              }
              alt="User placeholder image"
            />
            <div>
              <h4 className="author">{review.user}</h4>
              <StarRating rating={review.starRating} />
              <h3>{review.headline}</h3>
              <p>{review.writtenReview}</p>
            </div>
            <div className="review-btns">
              <button>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
