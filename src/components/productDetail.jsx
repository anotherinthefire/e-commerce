import { useParams } from "react-router-dom";
import { getProductById } from "../../fetcher";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState({ errorMessage: '', data: {} });
  const { productId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseObject = await getProductById(productId);
        setProduct(responseObject);
      } catch (error) {
        setProduct({ errorMessage: 'Error fetching product', data: {} });
      }
    };

    fetchData();
  }, [productId]);

  const createMarkup = () => {
    return { __html: product.data?.description }
  }

  return (
    <article>
      <div className="mt-10 mb-2 font-bold text-2xl">
        {product.data.title}
      </div>
      <div className="grid grid-cols-3 space-x-11">
        <figure>
          <div>
            <img src={`../public/assets/${product.data.image}`} alt={product.data.title} />
          </div>
        </figure>

        <aside>
          <div>
            <h3>Dimensions</h3>
            <label>{product.data.specs?.dimensions}</label>
          </div>

          {product.data.specs?.capacity && (
            <div>
              <h3>Capacity</h3>
              <label>{product.data.specs.capacity}</label>
            </div>
          )}
          <div>
            <h3>Features</h3>
            <ul className="list-disc">
              {product.data.features?.map((f, i) => (
                <li key={`features${i}`}>{f}</li>
              ))}
            </ul>
          </div>
        </aside>

        <aside>
          <div className="font-bold text-2xl">
            &pound;{product.data.price}
          </div>

          <div className="px-2 py-4 bg-gray-300 rounded-lg font-bold">
            <label>Stock level: {product.data.stock}</label>
            <br />
            <label>FREE Delivery</label>
          </div>

          <div className="mt-5 space-y-3">
            <button className="px-2 py-1 bg-gray-300 rounded-xl border-1 border-gray-500">
              Add to Basket
            </button>
          </div>
        </aside>
      </div>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </article>
  );
};

export default ProductDetail;
