import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} img={p.img ? p.img : ""} />
  ));

  let TextAreaElement = React.createRef();

  let AddNewPost = () => {
    props.addPost();
  };

  let ChangeText = () => {
    let text = TextAreaElement.current.value;
    props.updateNewText(text);
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
          value={props.newPostText}
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
