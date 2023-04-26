import {BsSearch} from 'react-icons/bs'
import FilterCategoryItem from '../FilterCategoryItem'
import FilterRatingItem from '../FilterRatingItem'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeTitleSearch,
    onChangeCategory,
    onChangeRating,
    onClearFiltersClicked,
  } = props

  const clearFiltersClicked = event => onClearFiltersClicked(event)

  return (
    <div className="filters-group-container">
      <div className="input-element-container">
        <input
          className="input-element"
          type="search"
          placeholder="Search"
          onKeyDown={onChangeTitleSearch}
        />
        <BsSearch />
      </div>
      <h2 className="category-heading">Category</h2>
      <div className="categories-container">
        {categoryOptions.map(eachCategory => (
          <FilterCategoryItem
            categoryDetails={eachCategory}
            onChangeCategory={onChangeCategory}
            key={eachCategory.categoryId}
          />
        ))}
      </div>
      <p className="rating-heading">Rating</p>
      <ul className="ratings-container">
        {ratingsList.map(eachRating => (
          <FilterRatingItem
            ratingDetails={eachRating}
            onChangeRating={onChangeRating}
            key={eachRating.ratingId}
          />
        ))}
      </ul>
      <button
        className="clear-filters-button"
        type="button"
        onClick={clearFiltersClicked}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
