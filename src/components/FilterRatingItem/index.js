import './index.css'

const FilterRatingItem = props => {
  const {ratingDetails, onChangeRating} = props
  const {imageUrl, ratingId} = ratingDetails
  const changeRating = () => onChangeRating(ratingId)
  return (
    <li className="rating-item">
      <button className="rating-button" type="button" onClick={changeRating}>
        <img
          className="rating-image"
          alt={`rating ${ratingId}`}
          src={imageUrl}
        />{' '}
        & up
      </button>
    </li>
  )
}

export default FilterRatingItem
