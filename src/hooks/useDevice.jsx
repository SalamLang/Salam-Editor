import { useEffect, useState } from "react";

const useDevice = () => {
  const [device, setDevice] = useState();

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile === true) {
      setDevice("mobile");
    } else {
      setDevice("pc");
    }
  }, []);

  return device;
};

export default useDevice;
