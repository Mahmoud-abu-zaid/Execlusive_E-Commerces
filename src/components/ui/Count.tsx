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

export default function Count({ tergetDate, storageKey }: CountProps) {
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
    <div className="flex justify-between">
      <div className="flex justify-around my-5">
        <div>
          <h2 className="m-6 text-[36px]">
            <b>{t("Flash Sales")}</b>
          </h2>
        </div>
        {hasTime && (
          <ul className="flex items-center gap-5">
            <div className="block text-center">
              <span className="font-bold text-[15px]">{t("Days")}</span>
              <li className="text-[32px]">
                <b>{remainingTime.days}</b>
              </li>
            </div>
            <li className="text-main-color text-[35px]">:</li>
            <div className="block text-center">
              <span className="font-bold text-[15px]">{t("Hours")}</span>
              <li className="text-[32px]">
                <b>{remainingTime.hours}</b>
              </li>
            </div>
            <li className="text-main-color text-[35px]">:</li>
            <div className="block text-center">
              <span className="font-bold text-[15px]">{t("Minutes")}</span>
              <li className="text-[32px]">
                <b>{remainingTime.minutes}</b>
              </li>
            </div>
            <li className="text-main-color text-[35px]">:</li>
            <div className="block text-center">
              <span className="font-bold text-[15px]">{t("Seconds")}</span>
              <li className="text-[32px]">
                <b>{remainingTime.seconds}</b>
              </li>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
}
