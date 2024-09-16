// import Catalog from '../components/Catalog/Catalog';
import { useLocation, useParams } from 'react-router-dom';
import Product from '../components/Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { apiGetProductsDetails } from '../redux/products/productsSlice';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  // const location = useLocation();
  // const backLinkRef = useRef(location.state?.from ?? '/products');

  const productsDetails = useSelector(
    ({ products }) => products.productDetails
  );
  const status = useSelector(({ products }) => products.status);
  const error = useSelector(({ products }) => products.error);

  useEffect(() => {
    dispatch(apiGetProductsDetails(productId));
  }, [productId, dispatch]);

  return (
    <>
      <Product />
    </>
  );
};

export default ProductDetailsPage;
