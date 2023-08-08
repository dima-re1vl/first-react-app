export const addPostActionCreator = (text) => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (text) => ({
    type: "UPDATE-NEW-POST-TEXT",
    message: text,
});


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ProfileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let posts = state.posts;
            let newPost = {
                id: posts[posts.length - 1].id + 1,
                message: state.newPostText
            };

            state.posts.push(newPost);

            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.message;
            return state;
        default:
            return state;
    }
}

export default ProfileReducer;