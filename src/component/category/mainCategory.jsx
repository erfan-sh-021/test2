import '../../css/card.css';

import { useState } from 'react';
import Card from '../card';

const MainCategory = ({props}) => {
   
    const AddButton = document.querySelector('.cardBottom>button');
    const PayButton = document.querySelector('.payButton ');
    const Cardd = document.querySelector('.card');


    // console.log(props)
    // AddButton.addEventListener(('click'), function () {
    //     AddButton.classList.add('deactive');
    //     PayButton.classList.remove('deactive');
    //     Cardd.classList.add('hover');
    // })

    return (
        <div className="row">
            {
                props.map((post, index) => {
                    
                    return (
                        <Card props={post} index={index}/>
                    )
                })


            }
        </div>

    )
}

export default MainCategory;
// const hendleClick = () => {

//     AddButton.classList.add('deactive');
//     PayButton.classList.remove('deactive');
//     Cardd.classList.add('hover');
//     setVisible((prev)=>!prev)
// }