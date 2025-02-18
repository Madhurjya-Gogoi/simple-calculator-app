import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(
    Dimensions.get('window').width > Dimensions.get('window').height
  );

  useEffect(() => {
    const updateOrientation = () => {
      setIsLandscape(Dimensions.get('window').width > Dimensions.get('window').height);
    };

    const subscription = Dimensions.addEventListener('change', updateOrientation);
    return () => subscription.remove();
  }, []);

  return isLandscape;
};

export default useOrientation;
