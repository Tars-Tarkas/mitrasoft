import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../redux/actions/actionCreator";

const SearchFilter = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    dispatch(getSearch(query));
    console.log(query.length);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setTimeout(() => dispatch(getSearch(e.target.value)), 500);
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
