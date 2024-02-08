const StarIcon = ({ isFilled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={isFilled ? "hsl(51,96%,51%)" : "none"}
      stroke={isFilled ? "hsl(51,96%,51%)" : "currentColor"}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export const StarRating = ({ asButton = false, rating }) => {
  return [1, 2, 3, 4, 5].map((index) => {
    if (asButton) {
      return (
        <button key={index}>
          <StarIcon isFilled={index <= rating} />
        </button>
      )
    }
    return <StarIcon key={index} isFilled={index <= rating} />
  })
}