import Header from "../components/header/Header.jsx";
import Side from "../components/sidebar/Side.jsx";
import Editor from "../components/editor/Editor.jsx";
import Logo from "../components/editor/Logo.jsx";
import { useParams } from "react-router-dom";
const EditorLayout = () => {
  const params = useParams();

  if (params.id !== undefined) {
  }

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
