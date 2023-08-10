import { combineReducers, legacy_createStore as createStore } from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
});

let store = createStore(reducers);
window.store = store;
export default store;