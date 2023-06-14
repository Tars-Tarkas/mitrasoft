import React from "react";
import { Pagination } from "react-bootstrap";

type PaginationsType = {
  total: number;
  current: number;
  onChangePage: () => void;
};

const Paginations = ({ total, current, onChangePage }: PaginationsType) => {
  return <></>;
};

export default Paginations;
