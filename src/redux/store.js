import DialogsReducer from "./DialogsReducer";
import ProfileReducer from "./ProfileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "hi, its me" },
                {
                    id: 2,
                    message: "my name is Cat",
                    img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
                }],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Dmitriy" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Valera" },
                { id: 4, name: "Nikita" },
                { id: 5, name: "Misha" },
            ],
            messages: [
                { id: 1, message: "Hi!" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "Good, what about you?" },
                { id: 4, message: "Fine!" },
            ],
            newMessageText: ''
        }
    },
    _callSubsriber() { },
    subscribe(observer) {
        this._callSubsriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
        this._callSubsriber(this._state);
    }
}

export default store;
window.store = store;