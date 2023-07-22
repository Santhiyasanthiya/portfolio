import React from 'react';
import LottieAnimation from './Lottie';
import home from './laptop.json';

const Coder = () => {

    return (
        <div>
            <LottieAnimation lotti={home} autoplay
                loop />
        </div>
    )
}

export default Coder;