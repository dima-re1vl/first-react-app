import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/ProfileReducer";

const MyPosts = (props) => {
  let postsElements = props.data.posts.map((p) => (
    <Post message={p.message} img={p.img ? p.img : ""} />
  ));

  let TextAreaElement = React.createRef();

  let AddNewPost = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };

  let ChangeText = () => {
    let text = TextAreaElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div>
      <div className={s.persons_edit}>
        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          placeholder="Write something..."
          ref={TextAreaElement}
          value={props.data.newPostText}
          onChange={ChangeText}
        ></textarea>
        <button className={s.btn_send} onClick={AddNewPost}>
          Send
        </button>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
