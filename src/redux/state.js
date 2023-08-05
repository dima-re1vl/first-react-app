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

export default state;