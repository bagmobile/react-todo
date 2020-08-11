import React from "react";
import TodoItem from "./todo-item";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: `none`,
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  const { list, onToggle } = props;

  if (list.length === 0) {
    return <p>no tasks</p>;
  }

  return (
    <ul style={styles.ul}>
      {list.map((item, index) => (
        <TodoItem
          key={item.id}
          todo={item}
          order={index + 1}
          onChange={onToggle}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onToggle: PropTypes.func,
};

export default TodoList;
