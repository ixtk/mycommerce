import { useState } from "react"
import "./App.css"
import { Header } from "./components/Header/Header"
import { ImageCarousel } from "./components/Carousel/ImageCarousel"
import { ProductDetails } from "./components/Details/Details"

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <div className="product-container">
          <ImageCarousel />
          <ProductDetails />
        </div>
      </main>
    </div>
  )
}

export default App
