import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { getSearch } from "../redux/actions/actionCreator";
import { useDispatch } from "react-redux";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValue(e.target.value);
    setTimeout(() => dispatch(getSearch(value)), 1000);
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="Поиск по заголовку"
        aria-describedby="basic-addon2"
        onChange={(e) => handleChange(e)}
        value={value}
      />
      <Button variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
};

export default SearchInput;
