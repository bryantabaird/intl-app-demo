import { useTranslation } from "react-i18next";

const Pluralization = () => {
  const { t } = useTranslation();
  const pr = new Intl.PluralRules("en-US", {
    type: "ordinal",
  });
  const suffixes: Record<Intl.LDMLPluralRule, string> = {
    zero: "th",
    one: "st",
    two: "nd",
    few: "rd",
    many: "th",
    other: "th",
  };
  const formatOrdinal = (value: number) =>
    `${value}${suffixes[pr.select(value)]}`;

  return (
    <section>
      <h3>{t("plural")}</h3>
      <ul>
        <li>{formatOrdinal(0)}</li>
        <li>{formatOrdinal(1)}</li>
        <li>{formatOrdinal(2)}</li>
        <li>{formatOrdinal(40)}</li>
        <li>{formatOrdinal(63)}</li>
        <li>{formatOrdinal(100)}</li>
      </ul>
      <p>
        <a href="https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html">
          Rules
        </a>
      </p>
    </section>
  );
};

export default Pluralization;
