import { loggedInUser, assetsBaseUrl } from "../data"
import userPlaceholderImg from "../assets/user-placeholder.png"
import "../styles/Reviews.css"
import { StarRating } from "./StarRating"

export const ReviewList = ({
  reviews,
  setReviews,
  setReviewToEdit,
  setFormVisible
}) => {
  const handleEditToggle = (review) => {
    setReviewToEdit(review)
    setFormVisible(true)
  }

  const deleteReview = (reviewIndex) => {
    setReviews(reviews.filter((_, index) => index !== reviewIndex))
  }

  return (
    <div className="review-list">
      {reviews.map((review, reviewIndex) => {
        return (
          <div className="review" key={reviewIndex}>
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
            {loggedInUser.name === review.user && (
              <div className="review-btns">
                <button onClick={() => deleteReview(reviewIndex)}>
                  Delete
                </button>
                <button onClick={() => handleEditToggle(review)}>Edit</button>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
