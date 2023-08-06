import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom'

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile" element={<Profile data={props.state.profilePage} AddPost={props.AddPost} ChangePostText={props.ChangePostText} />} />
          <Route path="/dialogs/*" element={<Dialogs data={props.state.dialogsPage} AddMessage={props.AddMessage} ChangeMessageText={props.ChangeMessageText} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
