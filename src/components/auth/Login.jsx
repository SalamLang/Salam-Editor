import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Input from "./Input.jsx";

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [readyLevel2, setReadyLevel2] = useState(false);
  const [logoClass, setLogoClass] = useState("");
  const [descriptionClass, setDescriptionClass] = useState("");
  const [mobile, setMobile] = useState(null);

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

  const handleSubmit = () => {};

  const handleChange = () => {};

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
                راحت تره.
              </p>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-center items-center">
            <h1 className={"text-[23px] font-bold"}>ورود و ثبت نام</h1>
            <Form onSubmit={handleSubmit} className={"w-full max-w-[320px]"}>
              <Input type={"number"} name={"mobile"} onInput={handleChange}>
                <svg
                  className={"w-[30px]"}
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ff5e04"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#CCCCCC"
                    strokeWidth="0.048"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 18H12.01M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z"
                      stroke="#ff5e04"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </Input>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
