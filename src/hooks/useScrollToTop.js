import { useEffect } from "react";

import scrollToTop from "../utils/scrollToTop";

const useScrollToTop = (change) => {
  useEffect(() => {
    scrollToTop();
  }, [change]);
};

export default useScrollToTop;
