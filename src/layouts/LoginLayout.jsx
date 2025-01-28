import Login from "../components/auth/Login.jsx";
import Verify from "../components/auth/Verify.jsx";
import { useState } from "react";

const EditorLayout = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [mobile, setMobile] = useState(null);

  return (
    <>
      {isVerifying === false && (
        <Login
          callback={(mobile) => {
            setIsVerifying(true);
            setMobile(mobile);
          }}
        />
      )}

      {isVerifying && <Verify mobile={mobile} />}
    </>
  );
};

export default EditorLayout;
