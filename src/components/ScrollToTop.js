import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // current route path

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // top pe scroll
  }, [pathname]); // jab bhi route change ho

  return null;
};

export default ScrollToTop;
