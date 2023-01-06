import { legacy_createStore as createStore} from 'redux'
import reducer from "../reducer/reducer";
const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
store.subscribe(() => {
	console.log(store.getState());
});
