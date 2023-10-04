import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Paginate.css';

const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
  const [activePage, setActivePage] = useState(1); // Local state for active page

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber); // Update active page in local state
    paginate(pageNumber); // Call the paginate function to load the selected page
  };

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${activePage === number ? 'active' : ''}`}>
            <Link to={`/page/${number}`} className='page-link' onClick={() => handlePageClick(number)}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
