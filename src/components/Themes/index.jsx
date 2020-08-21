import { useEffect } from "react";
import { ThemeState } from "../../Store";
import { useRecoilValue } from "recoil";

const Themes = () => {
  const theme = useRecoilValue(ThemeState);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme.themes[theme.index]);
  }, [theme.index]);
};

export default Themes;
