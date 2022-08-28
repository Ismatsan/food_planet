import React from 'react';
import style from './Header.module.css';

const Phone = () => {
    return (
        <div className={style.phone}>
            <button className={style.call}> </button>
            <div className={style.put}>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder={+996500405988}/>
            </div>
        </div>
    );
};

export default Phone;