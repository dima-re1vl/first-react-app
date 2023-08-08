import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/DialogsReducer";

const Dialogs = (props) => {
  let dialogsElements = props.data.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.data.messages.map((m) => (
    <Message message={m.message} />
  ));

  let NewMessageElement = React.createRef();

  let AddMessage = () => {
    let action = addMessageActionCreator();
    props.dispatch(action);
  };

  let ChangeText = () => {
    let text = NewMessageElement.current.value;
    let action = updateNewMessageActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.dialogs_edit}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            ref={NewMessageElement}
            placeholder="Say 'hello)'"
            onChange={ChangeText}
            value={props.data.newMessageText}
          ></textarea>
          <button className={s.btn_send} onClick={AddMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
