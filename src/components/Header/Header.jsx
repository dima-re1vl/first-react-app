import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logoPhoto' src='https://th.bing.com/th/id/OIG.CO2sHWK_IEYIwzXsC2hX' className={s.logo}/>
            <h1 className={s.header_text}>Re1vL</h1>
            <a href="https://t.me/re1vl" target='_blank'>
                <i className={`${'fa-brands'} ${'fa-telegram'} ${s['header_tg']}`} />
            </a>
        </header>
    );
}

export default Header;