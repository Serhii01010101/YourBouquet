import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiGetProducts } from '../redux/products/productsSlice';

import { STATUSES } from '../utils/constants';

import Category from '../components/Category/Category';
import ProductsList from '../components/ProductsList/ProductsList';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { WaitMessage } from '../components/WaitMessage/WaitMessage';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ products }) => products.products || '');
  const status = useSelector(({ products }) => products.status || '');
  const error = useSelector(({ products }) => products.error || '');

  useEffect(() => {
    dispatch(apiGetProducts());
  }, [dispatch]);

  const showProducts = status === STATUSES.success && Array.isArray(products);
  // const visiblePosts = POSTS_PER_PAGE * page;

  const renderView = {
    [STATUSES.pending]: <WaitMessage />,
    [STATUSES.error]: <ErrorMessage error={error} />,
    [STATUSES.success]: showProducts && <ProductsList products={products} />,
  };

  return (
    <div>
      <Category title="There are our collections of flowers" />
      {renderView[status]}
    </div>
  );
};

export default CatalogPage;
