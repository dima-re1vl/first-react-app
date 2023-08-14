import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  debugger;
  return (
    <header className={s.header}>
      <img
        alt="logoPhoto"
        src="https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX"
        className={s.logo}
      />
      <h1 className={s.header_text}>Social Site</h1>

      <div className={s.loginBlock}>
        <a href="https://t.me/re1vl" target="_blank">
          <i className={`${"fa-brands"} ${"fa-telegram"} ${s["header_tg"]}`} />
        </a>
        {props.isAuth ? (
          <h3 className={s.loginName}>{props.login}</h3>
        ) : (
          <NavLink to={"/login"}>
            <i class={`${"fa-solid fa-right-to-bracket"} ${s["login"]}`}></i>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
