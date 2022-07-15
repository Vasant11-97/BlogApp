import React, { Component } from 'react';

function Pagination(props) {
  const { articlesCount } = props;
  console.log(articlesCount, 'articlesCount');
  const requiredPages = Math.ceil(articlesCount / 10);
  const totalPages = [];
  for (let i = 1; i <= requiredPages; i++) {
    totalPages.push(i);
  }
  //   console.log(totalPages);
  //   const handlePagination = (page) => {
  //     console.log(page);
  //   };
  return (
    <>
      <ul className="flex flex-wrap ul">
        {totalPages.map((numbers) => {
          return (
            <li
              key={numbers}
              className="pages flex align-item justify-center"
              onClick={({ target }) =>
                props.handlePagination(+target.innerText)
              }
            >
              {numbers}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Pagination;
