import { useLottie } from 'lottie-react';

import lottieData from '../../../public/assets/json/pam.json';

const ConfettieLottie = () => {
  const { View } = useLottie({
    animationData: lottieData,
  });
  return <>{View}</>;
};

export default ConfettieLottie;
