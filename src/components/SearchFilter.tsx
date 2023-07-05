import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/actions/actionCreator";
import { useSearchParams } from "react-router-dom";

const SearchFilter = () => {
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    dispatch(getSearch(query.trim()));
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    setSearch(value);
    setTimeout(() => dispatch(getSearch(value)), 500);
    setSearchParams({
      _search: value,
    });
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
        className="w-25 btn btn-primary"
        type="submit"
        value="Поиск"
        disabled={search ? false : true}
      />
    </Form>
  );
};
export default SearchFilter;
