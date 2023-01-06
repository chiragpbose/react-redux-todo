let count = 0;
const addTodo = (payload) => ({
  type: "TODO",
  payload: { id: count++, task: payload, state: "active", search: "Find" },
});
const deleteItem = (payload) => ({
  type: "DELETE",
  payload: payload,
});
const compledTask = (payload) => ({
  type: "COMPLETED",
  payload: payload,
});
const searchItem = (payload) => ({
  type: "SEARCH",
  payload: payload,
});
export { addTodo, deleteItem, compledTask, searchItem };
