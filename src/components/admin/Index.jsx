import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import GetMyCodeService from "../../services/GetMyCodeService.js";
import { OrbitProgress } from "react-loading-indicators";
import GetAdminIndexService from "../../services/GetAdminIndexService.js";
import Line from "../shared/Line.jsx";
import Svg from "../shared/Svg.jsx";

const Index = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    GetAdminIndexService().then((result) => {
      setLoading(false);
      setData(result.data);
    });
  }, [location]);

  return (
    <>
      <Line title={"اطلاعات"} className={"mt-0"} />
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
        <>
          <div className={"flex justify-center items-center gap-[10px]"}>
            <div
              className={
                "bg-[#FF5C00] basis-1/3 relative overflow-hidden p-4 rounded-[15px] text-white"
              }
            >
              <h2>تعداد کل کد ها</h2>
              <h3 className={"mt-2 mb-0"}>{data?.codes?.count}</h3>
              <Svg name={"code"} />
            </div>
            <div
              className={
                "bg-[#276EF6] basis-1/3 relative overflow-hidden p-4 rounded-[15px] text-white"
              }
            >
              <h2>تعداد کل کاربران</h2>
              <h3 className={"mt-2 mb-0"}>{data?.users?.count}</h3>
              <Svg name={"users"} />
            </div>
            <div
              className={
                "bg-[#D1FF6E] basis-1/3 relative overflow-hidden p-4 rounded-[15px] text-black"
              }
            >
              <h2>تعداد کل بازدیدها</h2>
              <h3 className={"mt-2 mb-0"}>{data?.visit?.count}</h3>
              <Svg name={"visits"} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Index;
