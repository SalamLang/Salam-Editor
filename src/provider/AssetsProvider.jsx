import TrueContext from "../context/TrueContext.jsx";
import useTags from "../hooks/useTags.jsx";
import useAttr from "../hooks/useAttr.jsx";
import useStyle from "../hooks/useStyle.jsx";

// eslint-disable-next-line react/prop-types
const AssetsProvider = ({ children }) => {
  const tags = useTags();
  const attr = useAttr();
  const style = useStyle();

  return (
    <TrueContext.Provider value={{ tags, attr, style }}>
      {children}
    </TrueContext.Provider>
  );
};

export default AssetsProvider;
