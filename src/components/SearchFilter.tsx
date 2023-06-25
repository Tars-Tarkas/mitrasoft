import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByValue, getPosts } from "../redux/actions/actionCreator";
import { useSearchParams } from "react-router-dom";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("search") || "";
  const [search, setSearch] = useState(postQuery);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    if (query) {
      dispatch(filterByValue(query));
      setSearchParams({ search: query });
      setSearch("");
    } else dispatch(getPosts());
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Form
      className="mb-3 d-flex gap-2"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Form.Control
        type="search"
        placeholder="Поиск по заголовку"
        name="search"
        value={search}
        onChange={handleChangeInput}
      />
      <Form.Control
        className="w-25"
        type="submit"
        value="Поиск"
        // disabled={search ? false : true}
      />
    </Form>
  );
};
export default SearchFilter;
