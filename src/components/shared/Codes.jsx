import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetCodeService from "../../services/GetCodeService.js";
import GetMyCodeService from "../../services/GetMyCodeService.js";

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
      <div className="w-full h-full p-3">
        {loading === true && (
          <>
            <h1>loading..</h1>
            <h1>loading..</h1>
          </>
        )}
      </div>
    </>
  );
};

export default Codes;
