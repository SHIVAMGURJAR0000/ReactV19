import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ key, data, onHandleDeleteTodo }) => {
  return (
    <li key={key} className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <FaCheckCircle />
      </button>
      <button
        className="delete-btn"
        onClick={(e) => {
          onHandleDeleteTodo(data);
        }}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};
