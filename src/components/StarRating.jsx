import { useState } from "react"

const StarIcon = ({ isFilled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isFilled ? "var(--star-color)" : "none"}
      stroke={isFilled ? "var(--star-color)" : "var(--dark-grayish-blue)"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export const StarRating = ({
  onClick: setFieldValue,
  asButton = false,
  rating
}) => {
  const [hoveredStars, setHoveredStars] = useState(rating)

  const onStarClick = (index) => {
    setFieldValue("starRating", index, false)
    setHoveredStars(index)
  }

  return (
    <div className="stars" onMouseLeave={() => setHoveredStars(rating)}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        if (asButton) {
          return (
            <button
              onClick={() => onStarClick(starIndex)}
              onMouseOver={() => setHoveredStars(starIndex)}
              type="button"
              key={starIndex}
            >
              <StarIcon isFilled={starIndex <= hoveredStars} />
            </button>
          )
        }
        return <StarIcon key={starIndex} isFilled={starIndex <= rating} />
      })}
    </div>
  )
}
