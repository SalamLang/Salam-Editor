import { useEffect, useState } from "react";

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [readyLevel2, setReadyLevel2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setReadyLevel2(true);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div
          className={
            "w-full max-w-[900px] h-full max-h-[500px] bg-white rounded-[15px] border shadow-lg flex justify-center overflow-hidden"
          }
        >
          <div className="basis-1/2 bg-gradient-to-b from-[#ff9d00] relative to-[#ff5c00]">
            <div className="w-[300px] h-[3px] rounded absolute top-[120px] right-1/2 translate-x-1/2 rotate-[165deg] overflow-hidden">
              <div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="basis-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
