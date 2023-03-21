import React, { useEffect } from "react";

function ScrollTop() {
  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: 0,
    });
  }, []);
  return <div>{null}</div>;
}

export default ScrollTop;
