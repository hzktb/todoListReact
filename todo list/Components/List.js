import React from "react";

const List = (props) => {
  const handleDelete = (todoDelete) => {
    const newTodoList = props.arr.filter((todo) => todoDelete !== todo);
    props.setArr(newTodoList);
  };

  const handleLineThru = (e, toDoLineThru) => {
    const newTodoList = props.arr.map((todo) => {
      if (todo === toDoLineThru) {
        const crossedTodo = { ...todo };
        crossedTodo.checked = e.target.checked;
        return crossedTodo;
      }
      return todo;
    });
    props.setArr(newTodoList);
  };

  const handleListRender = () => {
    return props.arr.map((todo, index) => {
      let lineThru = {};
      if (todo.checked) {
        lineThru.textDecoration = "line-through";
      }
      return (
        <li key={index}>
          <input
            type="checkbox"
            id={index}
            onChange={(e) => {
              handleLineThru(e, todo);
            }}
          />
          <label htmlFor={index} style={lineThru}>
            {todo.value}
          </label>
          <button
            onClick={(e) => {
              handleDelete(todo);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
  };

  return <ul>{handleListRender()}</ul>;
};

export default List;
