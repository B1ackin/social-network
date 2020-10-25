import React from 'react';
import preloader from "../../../assets/images/unnamed.gif";

type PreloaderPropsType = {

}

export let Preloader = (props: PreloaderPropsType) => {
    return (
        <div>
            <img src={preloader}/>
    </div>
    )

}