import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetMyCodeService from "../../services/GetMyCodeService.js";
import { OrbitProgress } from "react-loading-indicators";
import Svg from "./Svg.jsx";
import { Tooltip } from "react-tooltip";
import Modal from "./Modal.jsx";
import { toast } from "react-hot-toast";

const Codes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [codes, setCodes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    GetMyCodeService().then((result) => {
      setLoading(false);
      setCodes(result.data);
    });
  }, [location]);

  const copyAddress = () => {
    navigator.clipboard
      .writeText("https://editor.salamlang.ir/" + id)
      .then(() => {
        toast.success("کپی شد!", {
          position: "bottom-center",
        });
      });
  };

  const share = (id) => {
    setOpenModal(true);
    setId(id);
  };

  const open_new_tab = (id) => {
    window.open("/" + id, "_blank");
  };

  return (
    <>
      <div className="w-full h-full p-3 overflow-auto">
        {loading === true && (
          <>
            <div
              className={
                "absolute top-0 right-0 bg-white/10 backdrop-blur-[2px] w-full h-full flex justify-center items-center"
              }
            >
              <OrbitProgress
                dense
                color="#F97316"
                size="medium"
                text=""
                textColor="#ffffff"
              />
            </div>
          </>
        )}

        {loading === false && (
          <div className={"flex flex-col gap-4"}>
            {codes.map((code) => {
              return (
                <>
                  <div
                    key={code.id}
                    className={
                      "border rounded-[15px] h-[60px] flex items-center px-3 justify-between"
                    }
                  >
                    <div className={"flex items-center justify-start"}>
                      <span>
                        عنوان:
                        <span className={"text-[#F94316]"}>
                          {" " + code.title.substring(0, 40)}
                        </span>
                      </span>
                    </div>
                    <div className={"flex items-center justify-end gap-[15px]"}>
                      <button
                        className={""}
                        data-tooltip-id="open_new_tab"
                        data-tooltip-content="باز کردن"
                        onClick={() => {
                          open_new_tab(code.id);
                        }}
                      >
                        <Svg name={"open_new_tab"} theme={"#276EF6"} />
                      </button>
                      <button
                        className={""}
                        data-tooltip-id="share"
                        data-tooltip-content="اشتراک گذاری"
                        onClick={() => {
                          share(code.id);
                        }}
                      >
                        <Svg name={"share"} theme={"#276EF6"} />
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
      <Modal
        show={openModal}
        className={"!w-[360px] h-auto pb-8"}
        callback={() => {
          setOpenModal(false);
        }}
      >
        <img
          src="/images/share.png"
          className={"w-[130px] mx-auto mt-[30px]"}
          alt=""
        />
        <h1 className={"text-center text-[20px] mt-3 font-bold"}>
          این لینک رو میتونی استفاده کنی
        </h1>
        <p
          className={
            "text-center text-gray-400 text-[14px] w-[200px] mt-3 mx-auto"
          }
        >
          برای به اشتراک گذاشتن لینک زیر به دوستان خود ارسال کنید
        </p>
        <div
          className={
            "w-[85%] h-[45px] p-[3px] mt-6 rounded-[15px] border mx-auto flex justify-center items-center"
          }
        >
          <div
            className={
              "w-full h-full rounded-[10px] bg-[#e6efff] flex items-center px-3 cursor-pointer justify-between flex-row-reverse"
            }
            onClick={() => {
              copyAddress();
            }}
            data-tooltip-id="copy"
            data-tooltip-content="کپی"
          >
            <span className={"text-[#2b71f6]"} dir={"ltr"}>
              editor.salamlang.ir/{id?.substring(0, 6)}...
            </span>
            <Svg name={"share"} theme={"#276EF6"} />
          </div>
        </div>
      </Modal>
      <Tooltip
        id={"copy"}
        className={"z-[1005] !text-[14px] !rounded-[10px]"}
      />
      <Tooltip id={"share"} className={"!text-[13px] !rounded-[10px]"} />
      <Tooltip id={"open_new_tab"} className={"!text-[13px] !rounded-[10px]"} />
    </>
  );
};

export default Codes;
