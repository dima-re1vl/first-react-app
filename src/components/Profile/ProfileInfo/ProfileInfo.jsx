import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.main_photo_container}>
        <img
          className={s.main_header_photo}
          alt="mainPhoto"
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        />
      </div>

      <div className={s.info}>
        <div className={s.info_photo}>
          <img
            className={s.info_img}
            alt="infoPhoto"
            src={
              props.profile.profile.photos.large ||
              "https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148"
            }
          />
        </div>
        <div className={s.info_person}>
          <h3>Name: {props.profile.profile.fullName || "Elijah McDermott"}</h3>
          <h3>About Me: {props.profile.profile.aboutMe || "Just me"}</h3>
          <h3>
            Is Working:{" "}
            {props.profile.profile.lookingForAJobDescription || "I Have"}
          </h3>
          <h3>
            Contact:{" "}
            <a
              href={
                "https://" + props.profile.profile.contacts.github ||
                "github.com/dima-re1vl"
              }
              target="_blank"
            >
              GitHub
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
