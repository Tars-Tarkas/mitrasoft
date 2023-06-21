import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";

type SearchFilterType = {
  setSearchParams: (post: any) => void;
  postQuery: string;
};

const SearchFilter = ({ setSearchParams, postQuery }: SearchFilterType) => {
  const [search, setSearch] = useState(postQuery);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    setSearchParams({ post: query });
  };

  const handleChangeInput = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <Form className="mb-3 d-flex gap-2" onSubmit={handleSubmit}>
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
