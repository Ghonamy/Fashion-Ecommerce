import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../Components/ProductDisplay";
import DescruptionBox from "../Components/DescruptionBox";
import RelatedProducts from "../Components/RelatedProducts";

function Product() {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const { state } = useLocation();

  const product =
    state?.product || all_products.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDisplay product={product} />
      <DescruptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Product;
