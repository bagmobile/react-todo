import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `.5rem 1rem`,
    marginBottom: `.5rem`,
    border: `1px solid #ccc`,
    borderRadius: `4px`,
  },
  input: {
    marginRight: `1rem`,
  },
};

function TodoItem(props) {
  const { todo, order, onChange } = props;
  const { id, title } = todo;
  const classDone = todo.completed ? `done` : ``;
  const { handleTodoItemRemove: onRemoveTodo } = useContext(Context);

  return (
    <li id={id} style={styles.li}>
      <span className={classDone}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={styles.input}
          onChange={() => onChange(id)}
        />
        <strong>{order}</strong>
        &nbsp;{title}
      </span>
      <button className={`rm`} onClick={() => onRemoveTodo(id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  order: PropTypes.number,
  onChange: PropTypes.func,
};

export default TodoItem;
