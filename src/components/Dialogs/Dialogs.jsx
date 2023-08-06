import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let NewMessageElement = React.createRef();

  let AddMessage = () => {
    let text = NewMessageElement.current.value;
    alert(text);
    NewMessageElement.current.value = "";
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
          ></textarea>
          <button className={s.btn_send} onClick={AddMessage}>
            123
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
