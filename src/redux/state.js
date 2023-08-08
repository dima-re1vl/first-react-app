export const addPostActionCreator = (text) => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (text) => ({
    type: "UPDATE-NEW-POST-TEXT",
    message: text,
});
export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" });
export const updateNewMessageActionCreator = (text) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    message: text,
});


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
        if (action.type == 'ADD-POST') {
            let posts = this._state.profilePage.posts;
            let newPost = {
                id: posts[posts.length - 1].id + 1,
                message: this._state.profilePage.newPostText
            };

            this._state.profilePage.posts.push(newPost);

            this.dispatch({ type: 'UPDATE-NEW-POST-TEXT', message: '' })

            this._callSubsriber(this._state);
        } else if (action.type == 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.message;
            this._callSubsriber(this._state);
        } else if (action.type == 'ADD-MESSAGE') {
            let messages = this._state.dialogsPage.messages;
            let newMessage = {
                id: messages[messages.length - 1].id + 1,
                message: this._state.dialogsPage.newMessageText
            };

            this._state.dialogsPage.messages.push(newMessage);

            this.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', message: '' })

            this._callSubsriber(this._state);
        } else if (action.type == 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.message;
            this._callSubsriber(this._state);
        }
    }
}

export default store;
window.store = store;