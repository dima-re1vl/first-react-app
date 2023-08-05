import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav className={s.nav}>
                <ul>
                    <li><NavLink to="/profile" className={({ isActive }) => isActive ? s.activeLink : s.item}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" className={({ isActive }) => isActive ? s.activeLink : s.item}>Messages</NavLink></li>
                    <li><NavLink to="/news" className={({ isActive }) => isActive ? s.activeLink : s.item}>News</NavLink></li>
                    <li><NavLink to="/music" className={({ isActive }) => isActive ? s.activeLink : s.item}>Music</NavLink></li>
                    <li><NavLink to="/settings" className={({ isActive }) => isActive ? s.activeLink : s.item}>Settings</NavLink></li>
                </ul>
                
        </nav>
    );
}

export default Nav;