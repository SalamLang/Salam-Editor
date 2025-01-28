import Login from "../components/auth/Login.jsx";
import Verify from "../components/auth/Verify.jsx";
import { useState } from "react";

const EditorLayout = () => {
  const [isVerifying, setIsVerifying] = useState(false);

  return (
    <>
      {/*<Login*/}
      {/*  callback={() => {*/}
      {/*    setIsVerifying(true);*/}
      {/*  }}*/}
      {/*/>*/}

      <Verify />

      {/*{isVerifying ?? <Verify />}*/}
    </>
  );
};

export default EditorLayout;
