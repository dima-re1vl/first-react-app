import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
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
            src="https://catamazing.com/cdn/shop/files/catshark.jpg?v=1649869148"
          />
        </div>
        <div className={s.info_person}>
          <h3>Name: Elijah McDermott</h3>
          <h3>Company: Sons</h3>
          <h3>Country: Findlay</h3>
          <h3>Birthday: Tue Jun 13 2001</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
