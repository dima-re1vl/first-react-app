import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={s.content}>
      <ProfileInfo />

      <MyPosts
        data={props.data}
        AddPost={props.AddPost}
        ChangePostText={props.ChangePostText}
      />
    </main>
  );
};

export default Profile;
