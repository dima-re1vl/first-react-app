import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { AddPost, AddMessage } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} AddPost={AddPost} AddMessage={AddMessage} />
            </React.StrictMode>
        </BrowserRouter>
    );
}



