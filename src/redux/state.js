import { rerenderEntireTree } from "../render";


let state = {

    profilePage: {
        posts: [
            { id: 1, message: "hi, its me" },
            {
                id: 2,
                message: "my name is Cat",
                img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
            }]
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
        ]
    }
}

export let AddPost = (message) => {
    let posts = state.profilePage.posts;
    let newPost = {
        id: posts[posts.length - 1].id + 1,
        message
    };

    state.profilePage.posts.push(newPost);

    rerenderEntireTree(state);
}

export let AddMessage = (message) => {
    let messages = state.dialogsPage.messages;
    let newMessage = {
        id: messages[messages.length - 1].id + 1,
        message
    };

    state.dialogsPage.messages.push(newMessage);

    rerenderEntireTree(state);
}
export default state;