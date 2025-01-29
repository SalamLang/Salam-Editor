import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import GetMyCodeService from "../../services/GetMyCodeService.js";
import { OrbitProgress } from "react-loading-indicators";
import GetAdminIndexService from "../../services/GetAdminIndexService.js";
import Line from "../shared/Line.jsx";

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

      {loading === false && <></>}
    </>
  );
};

export default Index;
