import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { STATUSES } from '../utils/constants';
import { apiGetProductsDetails } from '../redux/products/productsSlice';

import Product from '../components/Product/Product';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { WaitMessage } from '../components/WaitMessage/WaitMessage';

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

  const showProduct = status === STATUSES.success;

  const renderView = {
    [STATUSES.pending]: <WaitMessage />,
    [STATUSES.error]: <ErrorMessage error={error} />,
    [STATUSES.success]: showProduct && <Product {...productsDetails} />,
  };

  return <>{renderView[status]}</>;
};

export default ProductDetailsPage;
