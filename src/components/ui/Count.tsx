import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Count() {
  const { t } = useTranslation();
  interface dateTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }
  const [dateAndTime, setDateAndTime] = useState<dateTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  setInterval(() => {
    setDateAndTime({
      days: new Date().getDate(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
  });
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-around m-5">
          <div>
            <h2 className="mx-9 text-[36px]">
              <b>{t("Flash Sales")}</b>
            </h2>
          </div>
          <ul className="flex items-center gap-5">
            <div className="block">
              <span className="text-center">{t("Days")}</span>
              <li className=" block text-center text-[32px]">
                {" "}
                <b>{dateAndTime.days}</b>
              </li>
            </div>
            <li className=" block text-main-color text-[35px]">:</li>
            <div className="">
              <span className="text-center">{t("Hours")} </span>
              <li className="block text-center text-[32px]">
                {" "}
                <b>{dateAndTime.hours}</b>
              </li>
            </div>
            <li className=" block text-main-color text-[35px]">:</li>
            <div className="">
              <span className="text-center">{t("Minutes")}</span>
              <li className="block text-center text-[32px]">
                {" "}
                <b>{dateAndTime.minutes}</b>
              </li>
            </div>
            <li className=" block text-main-color text-[35px]">:</li>
            <div className="">
              <span className="text-center">{t("Seconds")} </span>
              <li className="block text-center text-[32px]">
                {" "}
                <b>{dateAndTime.seconds}</b>
              </li>
            </div>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}
