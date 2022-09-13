import React from 'react';
import Cheeseburger from "./Cheeseburger";
import cheeseburger from '../../../constants/cheeseburger';

const Cheeseburgers = () => {
    const elems = cheeseburger.map((item, index) =>{
        return <Cheeseburger
            key={index}
            titleDesc={item.titleDesc}
            desc={item.desc}
            price={item.price}

        />
    })
    return (
        <div>
            {elems}
        </div>
    );
};

export default Cheeseburgers;