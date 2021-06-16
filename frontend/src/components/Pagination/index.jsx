import React from 'react';
import classNames from 'classnames';

import "./styles.scss"

function Pagination(props) {
  const { pagination, onPageChange } = props
  const { page, limit, totalRows } = pagination
  const totalPages = Math.ceil(totalRows / limit)

  const handlePageChange = (newPage) => {
    onPageChange(newPage)
  }

  return (
    <div className="pagination center">
      <div>
        <button
          className={classNames("primary", { "disabled": page <= 1 })}
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map(
          x => (
            <button
              key={x + 1}
              className={classNames("primary", { "active": page === (x + 1) })}
              onClick={() => handlePageChange(x + 1)}
            >
              {x + 1}
            </button>
          )
        )}
        <button
          className={classNames("primary", { "disabled": page >= totalPages })}
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;