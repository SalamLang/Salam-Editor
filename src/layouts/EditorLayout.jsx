import Header from "../components/header/Header.jsx";
import Editor from "../components/editor/Editor.jsx";
import Logo from "../components/editor/Logo.jsx";
import { useLocation, useParams } from "react-router-dom";
import GetCodeService from "../services/GetCodeService.js";
import { useEffect, useState } from "react";
import Loading from "../components/loading/Loading.jsx";
const EditorLayout = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (params.id !== undefined) {
      GetCodeService(params.id).then((result) => {
        localStorage.setItem("is_me", result?.data?.is_me ?? false);
        localStorage.setItem("title", result?.data?.title ?? "");
        localStorage.setItem("code", result?.data?.code ?? "");
        document.title = result?.data?.title ?? "چی میزنی حاجی";
        setLoading(false);
      });
    } else {
      localStorage?.removeItem("is_me");
      localStorage?.removeItem("title");
      setLoading(false);
    }
  }, [params, location]);

  return (
    <>
      {loading && <Loading />}
      {loading === false && (
        <>
          <Header />
          <Logo />
          <Editor />
        </>
      )}
    </>
  );
};

export default EditorLayout;
