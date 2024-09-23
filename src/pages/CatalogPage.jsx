import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES } from '../utils/constants';
import { Loader } from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import ProductsList from '../components/ProductsList/ProductsList';
import { apiGetProducts } from '../redux/products/productsSlice';
import Category from '../components/Category/Category';

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
    [STATUSES.pending]: <Loader />,
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
