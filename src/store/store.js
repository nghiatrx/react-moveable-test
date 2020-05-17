import { createStore, combineReducers } from "redux";
import editorReducer from "./editor/editor.reducer";

const reducer = combineReducers({
  editor: editorReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
