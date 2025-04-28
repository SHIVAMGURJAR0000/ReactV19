import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  onHandleDeleteTodo,
  onHandleChedkedTodo,
  checked,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckedList"}>{data}</span>
      <button
        className="check-btn"
        onClick={() => {
          onHandleChedkedTodo(data);
        }}
      >
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
