import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
interface dateTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Count({ tergetDate }: { tergetDate: dateTime }) {
  const { t } = useTranslation();
  const [tergetId, setTergetId] = useState(Number(localStorage.getItem("id")) || 1);
  useEffect(() => {
    if (localStorage.getItem("id")) {
      const targetDateTime = new Date();
      targetDateTime.setDate(targetDateTime.getDate() + tergetDate.days);
      targetDateTime.setHours(targetDateTime.getHours() + tergetDate.hours);
      targetDateTime.setMinutes(targetDateTime.getMinutes() + tergetDate.minutes);
      targetDateTime.setSeconds(targetDateTime.getSeconds() + tergetDate.seconds);
      localStorage.setItem(`targetDateTime -${tergetId}`, JSON.stringify(targetDateTime.getTime()));
      const updateTargetId = tergetId + 1;
      localStorage.setItem("id", `${tergetId}`);
      setTergetId(updateTargetId);
    }else{
      localStorage.setItem("id","1")
    }
  },[]);

  let diffrentDate: number = 0;

  function countDown(): dateTime {
    const dateNow = new Date().getTime();

    const getDateStorge = localStorage.getItem(`targetDateTime -${tergetId}`);

    diffrentDate = Number(getDateStorge) - dateNow;

    let dateTime = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (diffrentDate > 0) {
      console.log("render");
      dateTime = {
        days: Math.floor(diffrentDate / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diffrentDate / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diffrentDate / (1000 * 60)) % 60),
        seconds: Math.floor((diffrentDate / 1000) % 60),
      };
    } else {
      localStorage.removeItem(`targetDateTime -${tergetId}`);
    }

    return dateTime;
  }

  const [dateTime, setDateTime] = useState<dateTime>(countDown());

  useEffect(() => {
    if (diffrentDate !== 0) {
      const timer = setInterval(() => {
        setDateTime(countDown());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-around m-5">
          <div>
            <h2 className="m-6 text-[36px]">
              <b>{t("Flash Sales")}</b>
            </h2>
          </div>
          {diffrentDate !== 0 && (
            <ul className="flex items-center gap-5">
              <div className="block">
                <span className="text-center font-bold text-[15px]">{t("Days")}</span>
                <li className=" block text-center text-[32px]">
                  <b>{dateTime.days}</b>
                </li>
              </div>
              <li className=" block text-main-color text-[35px]">:</li>
              <div className="">
                <span className="text-center font-bold text-[15px]">{t("Hours")} </span>
                <li className="block text-center text-[32px]">
                  <b>{dateTime.hours}</b>
                </li>
              </div>
              <li className=" block text-main-color text-[35px]">:</li>
              <div className="">
                <span className="text-center font-bold text-[15px]">{t("Minutes")}</span>
                <li className="block text-center text-[32px]">
                  <b>{dateTime.minutes}</b>
                </li>
              </div>
              <li className=" block text-main-color text-[35px]">:</li>
              <div className="">
                <span className="text-center font-bold text-[15px]">{t("Seconds")} </span>
                <li className="block text-center text-[32px]">
                  <b>{dateTime.seconds}</b>
                </li>
              </div>
            </ul>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
}

{/**/}