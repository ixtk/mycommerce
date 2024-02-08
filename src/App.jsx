import { useState } from "react"
import "./styles/App.css"
import { Header } from "./components/Header"
import { ImageCarousel } from "./components/ImageCarousel"
import { ProductDetails } from "./components/Details"
import { ReviewList } from "./components/ReviewList"

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="product-container">
          <ImageCarousel />
          <div className="container">
            <ProductDetails />
          </div>
        </div>
        <div className="container">
          <ReviewList />
        </div>
      </main>
    </div>
  )
}

export default App
