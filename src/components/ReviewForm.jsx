import { Formik, Form, Field, ErrorMessage } from "formik"
import { string, number, object } from "yup"
import { StarRating } from "./StarRating"
import { loggedInUser } from "../data"
import "../styles/Form.css"

const reviewSchema = object({
  starRating: number().required("Please select a star rating"),
  headline: string()
    .trim()
    .required("Please enter a headline")
    .min(4, "Minimum 4 characters"),
  writtenReview: string()
    .trim()
    .required("Please enter a written review")
    .min(15, "Minimum 15 characters")
})

const initialValues = {
  starRating: null,
  headline: "",
  writtenReview: ""
}

export const ReviewForm = ({
  reviews,
  setFormVisible,
  reviewToEdit,
  setReviewToEdit,
  setReviews
}) => {
  const onFormSubmit = (reviewValues) => {
    if (reviewToEdit) {
      const editedReviews = reviews.map((review) => {
        if (review.user === loggedInUser.name) {
          return reviewValues
        }
        return review
      })

      setReviews(editedReviews)
    } else {
      setReviews([{ ...reviewValues, user: loggedInUser.name }, ...reviews])
    }
    setFormVisible(false)
    setReviewToEdit(null)
  }

  const onFormCancel = () => {
    setFormVisible(false)
    setReviewToEdit(null)
  }

  return (
    <Formik
      initialValues={reviewToEdit || initialValues}
      validationSchema={reviewSchema}
      validateOnBlur={false}
      onSubmit={onFormSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div className="input-container">
              <div className="input-group star-rating">
                <label>Overall Rating</label>
                <StarRating
                  rating={formik.values.starRating}
                  asButton={true}
                  onClick={formik.setFieldValue}
                />
                {formik.errors.starRating && (
                  <span className="error">{formik.errors.starRating}</span>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="headline">Headline</label>
                <Field
                  id="headline"
                  name="headline"
                  placeholder="What's most important to know?"
                />
                <ErrorMessage
                  className="error"
                  component="span"
                  name="headline"
                />
              </div>

              <div className="input-group">
                <label htmlFor="writtenReview">Written Review</label>
                <Field
                  as="textarea"
                  name="writtenReview"
                  rows={4}
                  placeholder="What did you like or dislike? What did you use this product for?"
                />
                <ErrorMessage
                  className="error"
                  component="span"
                  name="writtenReview"
                />
              </div>
            </div>
            <div className="button-container">
              <button className="cancel" type="button" onClick={onFormCancel}>
                Cancel
              </button>
              <button className="submit btn-primary">Submit</button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
