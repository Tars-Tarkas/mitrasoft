import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import { PostsType } from "../types/types";

type SearchFilterType = {
  setSearchParams: (search: any) => void;
  postQuery: string;
};

const SearchFilter = ({ setSearchParams, postQuery }: SearchFilterType) => {
  const [search, setSearch] = useState(postQuery);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ search: query });
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
      <Form.Control className="w-25" type="submit" value="Поиск" />
    </Form>
  );
};
export default SearchFilter;
