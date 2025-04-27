import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface DateTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountProps {
  tergetDate: DateTime;
  storageKey: string;
}

export default function Banner({ tergetDate, storageKey }: CountProps) {
  const { t } = useTranslation();

  const [targetTime, setTargetTime] = useState<number>(0);
  const [remainingTime, setRemainingTime] = useState<DateTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const existing = localStorage.getItem(storageKey);
    const target = existing
      ? Number(existing)
      : (() => {
          const now = new Date();
          now.setDate(now.getDate() + tergetDate.days);
          now.setHours(now.getHours() + tergetDate.hours);
          now.setMinutes(now.getMinutes() + tergetDate.minutes);
          now.setSeconds(now.getSeconds() + tergetDate.seconds);
          const time = now.getTime();
          localStorage.setItem(storageKey, time.toString());
          return time;
        })();

    setTargetTime(target);
  }, [tergetDate, storageKey]);

  useEffect(() => {
    if (!targetTime) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetTime - now;

      if (diff <= 0) {
        localStorage.removeItem(storageKey);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      setRemainingTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();
    return () => clearInterval(timer);
  }, [targetTime, storageKey]);

  const hasTime = remainingTime.days > 0 || remainingTime.hours > 0 || remainingTime.minutes > 0 || remainingTime.seconds > 0;

  return (
    <section>
      <div className="flex justify-center gap-7 flex-wrap items-center bg-black m-[40px] p-10">
        <div>
          <p className="text-benner-color font-bold text-[16px]">{t("Categories")}</p>
          <h2 className="text-white text-[48px] py-5">
            {t("Enhance Your")}
            <br /> {t("Music Experience")}
          </h2>
          {hasTime && (
            <div className="flex gap-3.5 my-5 flex-wrap">
              <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
                <p className="text-xl font-bold">{remainingTime.hours}</p>
                <p className="text-sm leading-3">{t("Hours")}</p>
              </div>
              <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
                <p className="text-xl font-bold">{remainingTime.days}</p>
                <p className="text-sm leading-3">{t("Days")}</p>
              </div>
              <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
                <p className="text-xl font-bold">{remainingTime.minutes}</p>
                <p className="text-sm leading-3">{t("Minutes")}</p>
              </div>
              <div className="bg-white rounded-[100%]  text-center  w-[65px] h-[65px] flex flex-col items-center justify-center ">
                <p className="text-xl font-bold">{remainingTime.seconds}</p>
                <p className="text-sm leading-3">{t("Seconds")}</p>
              </div>
            </div>
          )}
          <button className="bg-benner-color w-[171px] h-[56px] rounded text-white">{t("Buy Now!")}</button>
        </div>
        <div className="relative z-[1000] ">
          <img className=" p-8 z-4 block" src="/images/earphone.png" alt="" />
          <div>
            <img className=" absolute top-0 -z-10 blur-xl" src="/images/Ellipse 23.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
