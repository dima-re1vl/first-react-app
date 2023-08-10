import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/DialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let AddMessage = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action);
  };

  let ChangeText = (body) => {
    props.store.dispatch(updateNewMessageActionCreator(body));
  };

  return (
    <Dialogs
      updateNewMessage={ChangeText}
      addMessage={AddMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
