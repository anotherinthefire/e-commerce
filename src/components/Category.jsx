/* eslint-disable react/prop-types */
const Category = ({id, title, onCategoryClick}) => {
  return (
        <div key={id} onClick={() => onCategoryClick(id)}>{title}</div>
  )
}

export default Category