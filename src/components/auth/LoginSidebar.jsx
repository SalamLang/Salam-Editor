import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const LoginSidebar = ({ verify }) => {
  const [progress, setProgress] = useState(0);
  const [readyLevel2, setReadyLevel2] = useState(false);
  const [logoClass, setLogoClass] = useState("");
  const [descriptionClass, setDescriptionClass] = useState("");

  useEffect(() => {
    if (!verify) {
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
          setDescriptionClass(" opacity-100 mt-[180px]");
        }, 4500);
      }
    }
    if (verify && verify === true) {
      setTimeout(() => {
        setLogoClass(
          " !opacity-100 !w-[110px] !top-[45px] !right-1/2 !translate-x-1/2",
        );
      }, 1000);

      setTimeout(() => {
        setDescriptionClass(" opacity-100 mt-[180px]");
      }, 1500);
    }
  }, [readyLevel2, verify]);

  return (
    <>
      <div className="basis-1/2 bg-gradient-to-b from-[#ff9d00] relative to-[#ff5c00] md:block hidden">
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
          {!verify ? (
            <>
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
                راحت تره.
              </p>
            </>
          ) : (
            <>
              <p
                className={
                  "text-white text-[20px] text-center mt-[50px] font-bold"
                }
              >
                اماده ای به یه دنیای جدید سفر کنی؟
              </p>
              <p
                className={
                  "text-white text-[15px] font-[400] text-center mt-4 px-7 leading-[1.8]"
                }
              >
                سلام یه دنبای جدیده! که هیچکی مثلشو ندیده
                <br />
                پس چرا زودتر کاراتو نمیکنی؟ وقت وقت مهاجراته ها!
                <br />
                اما اینبار به سلام نه به ...
              </p>
            </>
          )}

          <h1
            className={
              "font-[700] text-white text-[25px] absolute bottom-[20px] animate-pulse right-1/2 translate-x-1/2"
            }
          >
            سلام
          </h1>
        </div>
      </div>
    </>
  );
};

export default LoginSidebar;
