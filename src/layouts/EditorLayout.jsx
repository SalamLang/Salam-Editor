import Header from "../components/header/Header.jsx";
import Side from "../components/sidebar/Side.jsx";
import Editor from "../components/editor/Editor.jsx";
import Logo from "../components/editor/Logo.jsx";
import LoginContext from "../context/LoginContext.jsx";
import { useContext } from "react";

const EditorLayout = () => {
  const { login } = useContext(LoginContext);

  alert(login);
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
