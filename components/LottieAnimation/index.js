import React from 'react';
import Lottie from "lottie-react";
import animationData from "../LottieAnimation/rocket.json";

export default function LottieAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
}


