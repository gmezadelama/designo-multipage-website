import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

export interface IScrollToTopProps {
  children: JSX.Element;
}

const ScrollToTop = ({ children }: IScrollToTopProps) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default ScrollToTop;
