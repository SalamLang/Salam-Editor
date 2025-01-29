import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import Line from "../shared/Line.jsx";
import GetAllUsersService from "../../services/GetAllUsersService.js";

const Users = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    GetAllUsersService().then((result) => {
      setLoading(false);
      setData(result.data);
    });
  }, [location]);

  return (
    <>
      <Line title={"کاربران"} className={"mt-0"} />
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
          <div
            className={"flex justify-center items-center flex-col gap-[20px]"}
          >
            {data.map((user) => {
              return (
                <>
                  <div
                    className={
                      "border w-full h-[60px] rounded-[15px] flex justify-start px-4 items-center gap-[25px]"
                    }
                  >
                    <span className={"min-w-[70px]"}>
                      ایدی :<span>{user?.id}</span>
                    </span>

                    <span className={"min-w-[130px]"}>
                      نام :<span>{user?.name}</span>
                    </span>

                    <span className={"min-w-[130px]"}>
                      فامیلی :<span>{user?.family}</span>
                    </span>

                    <span className={"min-w-[130px]"}>
                      موبایل :<span>{user?.mobile}</span>
                    </span>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Users;
