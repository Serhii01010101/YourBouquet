import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestProduct } from '../services/api';
import { STATUSES } from '../utils/constants';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import ProductsList from '../components/ProductsList/ProductsList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products || '');
  const status = useSelector((state) => state.products.status || '');
  const error = useSelector((state) => state.products.error || '');

  useEffect(() => {
    dispatch(requestProduct());
  }, [dispatch]);

  const showProducts = status === STATUSES.success && Array.isArray(products);
  // const visiblePosts = POSTS_PER_PAGE * page;

  const renderView = {
    [STATUSES.pending]: <Loader />,
    [STATUSES.error]: <ErrorMessage error={error} />,
    [STATUSES.success]: showProducts && <ProductsList products={products} />,
  };

  return <div>{renderView[status]}</div>;
};

export default CatalogPage;
