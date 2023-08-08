import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.data.posts.map((p) => (
    <Post message={p.message} img={p.img ? p.img : ""} />
  ));

  let TextAreaElement = React.createRef();

  let AddNewPost = () => {
    let text = props.data.newPostText;
    props.dispatch({ type: "ADD-POST", message: text });
  };

  let ChangeText = () => {
    let text = TextAreaElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", message: text });
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
