const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: "hi, its me" },
        {
            id: 2,
            message: "my name is Cat",
            img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
        }],
    newPostText: '',
    profile: null
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: state.posts[state.posts.length - 1].id + 1,
                    message: state.newPostText
                }],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.message
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default: {
            return { ...state }
        }
    }
}


export const addPostActionCreator = (text) => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    message: text,
});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default ProfileReducer;