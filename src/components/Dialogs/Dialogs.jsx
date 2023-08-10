import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let NewMessageElement = React.createRef();

  let AddMessage = () => {
    props.addMessage();
  };

  let ChangeText = (e) => {
    let body = e.target.value;
    props.updateNewMessage(body);
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
            value={state.newMessageText}
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
