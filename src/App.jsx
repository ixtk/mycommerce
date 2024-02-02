import { useState } from "react"
import "./App.css"
import { Header } from "./components/Header/Header"
import { ImageCarousel } from "./components/Carousel/ImageCarousel"

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <ImageCarousel />
      </main>
    </div>
  )
}

export default App
