import { useEffect } from "react";

const useDisableScroll = () => {
  useEffect(() => {
    document.body.style.cssText = `overflow-y:hidden`;
    return () => document.body.removeAttribute("style");
  }, []);
  return null;
};

export default useDisableScroll;
