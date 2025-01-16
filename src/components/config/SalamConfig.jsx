import { useEffect } from "react";

const SalamConfig = () => {
  useEffect(() => {
    window.salam = "سلام";
  }, []);

  return null;
};

export default SalamConfig;
