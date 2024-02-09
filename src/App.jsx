import { useState } from "react"
import "./styles/App.css"
import { Header } from "./components/Header"
import { ImageCarousel } from "./components/ImageCarousel"
import { ProductDetails } from "./components/Details"
import { ReviewList } from "./components/ReviewList"
import { ReviewForm } from "./components/ReviewForm"
import { loggedInUser, product } from "./data"

function App() {
  const [quantityInCart, setQuantityInCart] = useState(0)
  const [formVisible, setFormVisible] = useState(false)
  const [reviewToEdit, setReviewToEdit] = useState(null)
  const [reviews, setReviews] = useState(product.reviews)

  const alreadyWroteReview = () => {
    return reviews.some((review) => review.user === loggedInUser.name)
  }

  return (
    <div>
      <Header
        setQuantityInCart={setQuantityInCart}
        quantityInCart={quantityInCart}
      />
      <main>
        <div className="product-container">
          <ImageCarousel />
          <ProductDetails setQuantityInCart={setQuantityInCart} />
        </div>
        <div className="container review-container">
          <div className="list-header">
            <h2>
              {reviewToEdit
                ? "Edit your review"
                : formVisible
                ? "Add your review"
                : "Customer reviews"}
            </h2>
            {!formVisible && !alreadyWroteReview() && (
              <button
                className="add-btn btn-primary"
                onClick={() => setFormVisible(true)}
              >
                <span className="short">Add</span>
                <span className="long">Write a review</span>
              </button>
            )}
          </div>
          {formVisible ? (
            <ReviewForm
              reviews={reviews}
              reviewToEdit={reviewToEdit}
              setReviewToEdit={setReviewToEdit}
              setFormVisible={setFormVisible}
              setReviews={setReviews}
            />
          ) : (
            <ReviewList
              setReviewToEdit={setReviewToEdit}
              setFormVisible={setFormVisible}
              reviews={reviews}
              setReviews={setReviews}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default App
