import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetCodeService from "../../services/GetCodeService.js";
import GetMyCodeService from "../../services/GetMyCodeService.js";
import { OrbitProgress } from "react-loading-indicators";
import Svg from "./Svg.jsx";

const Codes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    GetMyCodeService().then((result) => {
      setLoading(false);
      setCodes(result.data);
    });
  }, [location]);

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
                          {" " + code.title.substring(0, 10) + "..."}
                        </span>
                      </span>
                    </div>
                    <div className={"flex items-center justify-end"}>
                      <button className={""}>
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
    </>
  );
};

export default Codes;
