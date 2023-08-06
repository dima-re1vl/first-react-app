import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { AddPost, AddMessage, ChangePostText, ChangeMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} AddPost={AddPost} AddMessage={AddMessage} ChangePostText={ChangePostText} ChangeMessageText={ChangeMessageText} />
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree);
