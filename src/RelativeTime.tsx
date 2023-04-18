import { useTranslation } from "react-i18next";

const RelativeTime = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const days = 36;

  return (
    <section>
      <h3>{t("relative time")}</h3>
      <p>{`${Math.floor(days / 7)} weeks and ${days % 7} days ago`}</p>
    </section>
  );
};

export default RelativeTime;
