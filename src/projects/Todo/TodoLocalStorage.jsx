const todokey = "reactTodo";
export const getLocalStorgeTodoData = () => {
  //give data in string format
  const rawTodos = localStorage.getItem(todokey);

  // from the very first time rawTodos will be null and json.parse will give undefined
  // if we have no data then return empty array

  if (!rawTodos) return [];

  //convert string into obj
  return JSON.parse(rawTodos);
};

export const setLocalStorgeTodoData = (task) => {
  //add data to local storage
  return localStorage.setItem(todokey, JSON.stringify(task));
};
