import { combineReducers } from "redux";
const initialState = {
  list: [],
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case "TODO":
      return { ...state, list: [...state.list, action.payload] };
    case "DELETE":
      const deleteDta = state.list.filter((ele) => {
        return ele.id != action.payload;
      });
      return { ...state, list: deleteDta };
    case "COMPLETED":
      const compledtask = state.list.map((ele) => {
        if (ele.id == action.payload) {
          if (ele.state == "active") {
            ele.state = "completed";
          } else {
            ele.state = "active";
          }
        }
        return ele;
      });
      return { ...state, list: compledtask };

    case "SEARCH":
      const search = state.list.map((ele) => {
        if (!ele.task.toUpperCase().includes(action.payload.toUpperCase())) {
          ele.search = "Not-Found";
        } else {
          ele.search = "Find";
        }
        return ele;
      });

      return {
        ...state,
        list: search,
      };
    default:
      return state;
  }
};

export default combineReducers({ todo });
