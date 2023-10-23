import { useState, useEffect } from "react";

const VerifyWidth = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innertHeight,
  });

  useEffect(() => {
    // const timer = setInterval(() => {
    //   setScreenSize({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    // }, 100);
    // return () => {
    //   clearInterval(timer);
    // };

    const handleResize = () =>
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // Desmontar o evento quando não houver mais utilidade a aplicação
  }, []);

  return (
    <div
      style={{
        backgroundColor: screenSize.width < 500 ? "coral" : "lightblue",
      }}
    >
      <h2>Largura: {screenSize.width}px</h2>
      <h2>Altura: {screenSize.height}px</h2>
    </div>
  );
};

export default VerifyWidth;
