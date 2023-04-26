import './index.css'

const FilterCategoryItem = props => {
  const {categoryDetails, onChangeCategory} = props
  const {name, categoryId} = categoryDetails
  const changeCategory = () => onChangeCategory(categoryId)
  return (
    <p className="category-item" onClick={changeCategory}>
      {name}
    </p>
  )
}

export default FilterCategoryItem
