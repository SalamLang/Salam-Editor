import { useEffect, useState } from "react";

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [readyLevel2, setReadyLevel2] = useState(false);
  const [logoClass, setLogoClass] = useState("");
  const [descriptionClass, setDescriptionClass] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setReadyLevel2(true);
          }, 200);
          return prev;
        }
      });
    }, 5);

    if (readyLevel2) {
      setLogoClass(" !opacity-100");

      setTimeout(() => {
        setLogoClass(
          " !opacity-100 !top-[83px] !right-[330px] !rotate-[360deg]",
        );
      }, 1000);

      setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else {
              clearInterval(interval);
              return prev;
            }
          });
        }, 5);
      }, 2000);

      setTimeout(() => {
        setLogoClass(" !opacity-100 !top-[83px] !right-1/2 !translate-x-1/2");
      }, 3100);

      setTimeout(() => {
        setLogoClass(
          " !opacity-100 !w-[110px] !top-[45px] !right-1/2 !translate-x-1/2",
        );
      }, 4000);

      setTimeout(() => {
        setDescriptionClass(" opacity-100 mt-[170px]");
      }, 4500);
    }
  }, [readyLevel2]);

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
            <img
              src="/images/favicon.svg"
              alt="logo"
              className={
                "w-[70px] absolute top-[10px] transition-all duration-500 right-[60px] opacity-0" +
                logoClass
              }
            />
            <div
              className={
                "h-[calc(100%-170px)] mt-[100px] transition-all duration-500 opacity-0" +
                descriptionClass
              }
            >
              <p
                className={
                  "text-white text-[20px] text-center mt-[50px] font-bold"
                }
              >
                سلام اولین زبان فارسی جهان!
              </p>
              <p
                className={
                  "text-white text-[15px] font-[400] text-justify mt-4 px-7 leading-[1.8]"
                }
              >
                تا حالا با سلام کار کردی؟ میدونی چقدر خفنه؟ شاید بگی اخه به چه
                درد من میخوره ولی بزار بهت بگم طراحی؟ نویسنده ای؟ معلمی؟ دانش
                اموزی؟ دوست داری یه جایی باشه هرچی خواستی بسازی؟ دوست داری سایت
                شخصیتو بسازی؟ یا اصلا برنامه نویسی؟ چی ازین بهتر که بتونی با
                زبان مادریت کد بزنی؟ هم سریع تره هم بهتره دیگه! تازه یادگیریش هم
                راحت تره.🔵🟧
              </p>
            </div>
          </div>
          <div className="basis-1/2"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
