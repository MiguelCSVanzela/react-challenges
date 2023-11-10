// Componente 9 - Criando relogio em tempo real
import { useState, useEffect } from "react";

export default function Clock() {
  //   const time = new Date();
  //   const [actualTime, setActualTime] = useState({
  //     hour: time.getHours(),
  //     minutes: time.getMinutes(),
  //     seconds: time.getMinutes(),
  //   });
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    // setTimeout(() => {
    //   setActualTime({
    //     hour: time.getHours(),
    //     minutes: time.getMinutes(),
    //     seconds: time.getSeconds(),
    //   });
    // }, 1000);

    const timer = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h2>
        {/* {actualTime.hour}:{actualTime.minutes}:{actualTime.seconds} */}
        {clock.toLocaleTimeString()}
      </h2>
      <h2></h2>
    </>
  );
}
