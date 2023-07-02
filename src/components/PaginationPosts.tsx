import React from "react";
import { Pagination } from "react-bootstrap";

type PaginationPostsType = {
  totalPage: number;
  postPerPage: number;
  currentPage: number;
  setCurrentPage: (current: number) => void;
};

const PaginationPosts = ({
  totalPage,
  postPerPage,
  currentPage,
  setCurrentPage,
}: PaginationPostsType) => {
  let items = [];
  let pageLength = Math.ceil(totalPage / postPerPage);

  if (currentPage > 1) {
    items.push(
      <Pagination.First key="first" onClick={() => setCurrentPage(1)} />
    );
  }

  if (currentPage > 1) {
    items.push(
      <Pagination.Prev
        key="prev"
        onClick={() => setCurrentPage(currentPage - 1)}
      />
    );
  }

  for (let page = 1; page <= pageLength; page++) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        active={page === currentPage}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }
  if (currentPage < pageLength) {
    items.push(
      <Pagination.Next
        key="next"
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    );
  }
  if (currentPage < pageLength) {
    items.push(
      <Pagination.Last key="last" onClick={() => setCurrentPage(pageLength)} />
    );
  }

  return (
    <Pagination className="d-flex justify-content-center">{items}</Pagination>
  );
};

export default PaginationPosts;
