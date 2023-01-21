import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';
import Product from '../components/Product';
import Pagination from '../components/ui/Pagination';
import { DUMMY_PRODUCTS } from '../data/data';
import Filter from '../components/ui/filter';
import { filterActions } from '../store/filterSlice';
function HomePage({ dummy, setDummy }) {
  const [currentPage, setCurrentPage] = useState(1);
  //   const [dummy, setDummy] = useState([]);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummy.slice(indexOfFirstPost, indexOfLastPost);
  const filteredData = useSelector((state) => state.filter.filters);
  const dispatch = useDispatch();
  // Change page
  useEffect(() => {
    if (filteredData.length === 0) {
      setDummy(DUMMY_PRODUCTS);
    } else {
      let newData = DUMMY_PRODUCTS?.filter((element) =>
        filteredData.some((item) =>
          element.company.includes(item.title.toLowerCase())
        )
      );
      setDummy(newData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  const clearHandler = () => {
    dispatch(filterActions.clearAll());
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Fragment>
      <div className='bg-[#F7FAFC] px-[131px] pt-6 pb-6 flex flex-row gap-7 mt-[100px] sm:px-[70px] '>
        <div className='ms:hidden'>
          <Sidebar />
        </div>

        <div className='flex flex-col gap-y-4'>
          {filteredData.length !== 0 && (
            <div className='flex flex-row gap-x-[8px] items-center'>
              {filteredData?.map((item, index) => (
                <Filter item={item} key={index} />
              ))}
              <p
                onClick={clearHandler}
                className='not-italic font-normal leading-[19px] text-[16px] text-[#0D6EFD] cursor-pointer'
              >
                Clear all filter
              </p>
            </div>
          )}
          <div className='flex flex-row flex-wrap gap-[20px]'>
            {currentPosts?.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={DUMMY_PRODUCTS.length}
            paginate={paginate}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
