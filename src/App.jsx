import { useState } from "react"
import "./styles/App.css"
import { Header } from "./components/Header"
import { ImageCarousel } from "./components/ImageCarousel"
import { ProductDetails } from "./components/Details"
import { ReviewList } from "./components/ReviewList"
import { ReviewForm } from "./components/ReviewForm"

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="product-container">
          <ImageCarousel />
          <ProductDetails />
        </div>
        <div className="container review-container">
          <div className="list-header">
            <h2>Customer reviews</h2>
            <button className="add-btn btn-primary">
              <span className="short">Add</span>
              <span className="long">Write a review</span>
            </button>
          </div>
          <ReviewList />
          <ReviewForm />
        </div>
      </main>
    </div>
  )
}

export default App
