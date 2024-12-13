import { useEffect, useState } from "react";

export const useStickyNavbar = () => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setFixed(false);
      } else {
        setFixed(true);
      }
      prevScrollPos = currentScrollPos;
    };
  }, [fixed]);

  return [fixed, setFixed];
};
