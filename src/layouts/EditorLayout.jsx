import Header from "../components/header/Header.jsx";
import Side from "../components/sidebar/Side.jsx";
import Editor from "../components/editor/Editor.jsx";
import Logo from "../components/editor/Logo.jsx";
import { useParams } from "react-router-dom";
import GetCodeService from "../services/GetCodeService.js";
import { useEffect } from "react";
const EditorLayout = () => {
  const params = useParams();

  useEffect(() => {
    if (params.id !== undefined) {
      GetCodeService(params.id).then((result) => {});
    }
  }, [params]);

  return (
    <>
      <Header />
      <Logo />
      <Side />
      <Editor />
    </>
  );
};

export default EditorLayout;
