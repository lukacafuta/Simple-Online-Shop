import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/slices/productSlice";
import { Link, Outlet } from "react-router-dom";
import { apiProducts } from "../common/api";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const fetchProducts = async () => {
    try {
      // fetch products using axios
      const res = await apiProducts.get();
      const data = res.data;
      console.log("response:", res);
      console.log("data:", data);

      // dispatch to store
      dispatch(loadProducts(data));
    } catch (error) {
      console.error("Could not fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="products">
      <aside>
        <h1>Our products:</h1>
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            {product.title}
          </Link>
        ))}
      </aside>
      <Outlet />
    </div>
  );
}
