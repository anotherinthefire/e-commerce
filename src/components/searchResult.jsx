import { useSearchParams } from "react-router-dom"
import { getProductByQuery } from "../../fetcher"
import { useEffect, useState } from "react"
import CategoryProduct from "./categoryProduct"

const SearchResults = () => {
  const [products, setProducts] = useState({
    errorMessage: "",
    data: [],
  });

  const [searchParams] = useSearchParams()
  const query = searchParams.get("s");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseObject = await getProductByQuery(query)
        setProducts(responseObject)
      } catch (error) {
        setProducts((prevState) => ({
          ...prevState,
          errorMessage: error.message,
        }));
      }
    };
    if (query) {
      fetchData()
    }
  }, [query]);

  const renderProducts = () => {
    if (products.data.length > 0) {
      return products.data.map((p) => (
        <CategoryProduct key={p.id} {...p}>
          {p.title}
        </CategoryProduct>
      ));
    } else {
      return <div>No results found.</div>
    }
  };

  return (
    <div>
      {products.errorMessage && (
        <div>Error: {products.errorMessage}</div>
      )}
      {renderProducts()}
    </div>
  );
};

export default SearchResults
