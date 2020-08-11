import React, { useState } from "react";
import PropTypes from "prop-types";

function useInputValue(defaultValue = ``) {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (evt) => setValue(evt.target.value),
    },
    value: () => value,
    clear: () => setValue(``),
  };
}

function AddTodo({ onCreateTodo }) {
  const input = useInputValue(``);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    onCreateTodo(input.value());
    input.clear();
  }

  return (
    <form onSubmit={(evt) => handleFormSubmit(evt)}>
      <input {...input.bind} />
      <button type={"submit"}>Add</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreateTodo: PropTypes.func,
};

export default AddTodo;
