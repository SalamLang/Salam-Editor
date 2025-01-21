import { useEffect, useState } from "react";

const Login = () => {
  const [line, setLine] = useState(-200);

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div
          className={
            "w-full max-w-[900px] h-full max-h-[500px] bg-white rounded-[15px] border shadow-lg flex justify-center overflow-hidden"
          }
        >
          <div className="basis-1/2 bg-gradient-to-b from-[#ff9d00] to-[#ff5c00]">
            <hr
              className={`bg-gradient-to-r from-[#fff] from-[${line}%] to-transparent opacity-100 border-0 w-[300px] h-[2px] rounded mt-10 mr-10 -rotate-3`}
            />
          </div>
          <div className="basis-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
