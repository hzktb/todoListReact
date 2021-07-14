import React from "react";

const Input = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setArr([...props.arr, { value: props.value, checked: false }]);
    props.setValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todoInput">
          What would you like to do? :
          <input
            type="text"
            value={props.value}
            onChange={(e) => {
              props.setValue(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="add" />
      </form>
    </>
  );
};

export default Input;
