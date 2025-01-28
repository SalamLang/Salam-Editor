import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Input from "./Input.jsx";
import Label from "./Label.jsx";
import Button from "./Button.jsx";
import * as Yup from "yup";

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [readyLevel2, setReadyLevel2] = useState(false);
  const [logoClass, setLogoClass] = useState("");
  const [descriptionClass, setDescriptionClass] = useState("");

  const [formData, setFormData] = useState({
    mobile: 0,
  });

  const [clicked, setClicked] = useState(false);

  const [errors, setErrors] = useState({});

  const validation = Yup.object({
    mobile: Yup.string()
      .matches(
        /^(?:(?:\\+?|00)(98)|(0))?((?:90|91|92|93|99)[0-9]{8})$/,
        "شماره موبایل معتبر نیست",
      )
      .required("وارد کردن شماره موبایل الزامی است"),
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);

    validation
      .validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({});
        let result = await SendOtpService(formData.mobile);
        if (result) verifyLevel();
        setClicked(false);
      })
      .catch((err) => {
        const newErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(newErrors);
        setClicked(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

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
            <img
              src="/images/login.jpg"
              alt="login"
              loading={"lazy"}
              className={"w-[200px] -mt-10 hue-rotate-[215deg]"}
            />
            {/*<h1 className={"text-[23px] font-bold"}>ورود و ثبت نام</h1>*/}
            <Form onSubmit={handleSubmit} className={"w-full max-w-[320px]"}>
              <Label form={"number"} required={true}>
                شماره موبایل:
                <Input
                  type={"number"}
                  name={"mobile"}
                  onInput={handleChange}
                  placeholder={"شماره موبایل"}
                  autoFocus={true}
                  className={"mt-0.5 tracking-wide"}
                />
              </Label>
              <Button type={"submit"}>ارسال کد</Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
