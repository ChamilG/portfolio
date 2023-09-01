import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../Assets/coding2.json';

const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
  };
function HomeAnimation() {
  return (
    <>
        <Lottie options={lottieOptions} style={{ maxHeight: "500px" }} ></Lottie>
    </>
  )
}

export default HomeAnimation
