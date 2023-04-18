import { useTranslation } from "react-i18next";

enum Weekday {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function formatAMPM(date: any) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

const DateTime = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const now = new Date();

  return (
    <section>
      <h1>{t("date")}</h1>
      <p>{`${Weekday[now.getDay()]}, ${
        Month[now.getMonth()]
      } ${now.getDay()}, ${now.getFullYear()} at ${formatAMPM(now)}`}</p>
    </section>
  );
};

export default DateTime;
