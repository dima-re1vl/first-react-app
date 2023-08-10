const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        { id: 1, fullName: 'Dmitriy', status: 'new account', location: { city: 'Kiev', country: 'Ukraine' }, followed: false, photoURL: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg' },
        { id: 2, fullName: 'Andrew', status: 'its me', location: { city: 'Minsk', country: 'Belarus' }, followed: true, photoURL: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg' },
        { id: 3, fullName: 'Valera', status: 'hello there', location: { city: 'Philadelphia', country: 'USA' }, followed: false, photoURL: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg' },
        { id: 4, fullName: 'Misha', status: 'follow me', location: { city: 'Kharkov', country: 'Ukraine' }, followed: true, photoURL: 'https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg' },
    ]
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: {
            return { ...state }
        }
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });




export default UsersReducer;