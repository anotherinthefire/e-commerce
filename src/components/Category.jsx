/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import { getProducts } from "../../fetcher";
import { useState, useEffect } from "react";
import CategoryProduct from "./categoryProduct";

const Category = ({ id, title, onCategoryClick }) => {
  const [products, setProducts] = useState({
    errorMessage: "",
    data: []
  })

  const { categoryId } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseObject = await getProducts(categoryId);
        setProducts(responseObject);
      } catch (error) {
        setProducts({ errorMessage: 'Error fetching product', data: {} });
      }
    };
    fetchData();
  }, [categoryId]);

  const renderProducts = () => {
    return products.data.map(p =>
      <CategoryProduct key={p.id} {...p}>{p.title}</CategoryProduct>
    )
  }

  return (
    <div>
      {products.errorMessage && <div>Error: {products.errorMessage}</div>}
      {
        products.data && renderProducts()
      }
    </div>
  )
}

export default Category