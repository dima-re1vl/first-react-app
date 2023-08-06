import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} img={p.img ? p.img : ""} />
  ));

  let AddButtonElement = React.createRef();

  let AddPost = () => {
    let text = AddButtonElement.current.value;
    debugger;
    alert(text);
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
          ref={AddButtonElement}
        ></textarea>
        <button className={s.btn_send} onClick={AddPost}>
          Send
        </button>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
