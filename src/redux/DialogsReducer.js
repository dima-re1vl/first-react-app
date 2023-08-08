export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" });
export const updateNewMessageActionCreator = (text) => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    message: text,
});

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const DialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let messages = state.messages;
            let newMessage = {
                id: messages[messages.length - 1].id + 1,
                message: state.newMessageText
            };

            state.messages.push(newMessage);

            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
}

export default DialogsReducer;