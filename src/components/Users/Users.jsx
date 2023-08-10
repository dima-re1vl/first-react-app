import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Dmitriy",
        status: "new account",
        location: { city: "Kiev", country: "Ukraine" },
        followed: false,
        photoURL:
          "https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg",
      },
      {
        id: 2,
        fullName: "Andrew",
        status: "its me",
        location: { city: "Minsk", country: "Belarus" },
        followed: true,
        photoURL:
          "https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg",
      },
      {
        id: 3,
        fullName: "Valera",
        status: "hello there",
        location: { city: "Philadelphia", country: "USA" },
        followed: false,
        photoURL:
          "https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg",
      },
      {
        id: 4,
        fullName: "Misha",
        status: "follow me",
        location: { city: "Kharkov", country: "Ukraine" },
        followed: true,
        photoURL:
          "https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoURL} className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
