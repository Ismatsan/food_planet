import React, {useState} from 'react';
import style from "./SecondBlok.module.css";

const Summing = () => {
    const [likes, setLikes] = useState(0);

    function increase() {
        setLikes(likes + 1)
    }

    function decrease() {
        setLikes(likes - 1)
    }

    return (
        <>
            <div className={style.counter}>
                <div className={style.increase}>
                    <button onClick={increase}>+
                    </button>
                    <p className={style.like}>{likes}</p>
                </div>
                <div className={style.decrease}>
                    <button onClick={decrease}>
                        -
                    </button>
                </div>
            </div>
        </>
    )
}

export default Summing;