import { useState } from "react";
import { useTranslation } from "react-i18next";

function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

const SocialMedia = () => {
  const { t, i18n } = useTranslation();
  const likes = 123_456_789;
  const locale = i18n.language;

  return (
    <section>
      <h3>{t("likes")}</h3>
      <p>{nFormatter(likes, 2)}</p>
    </section>
  );
};

export default SocialMedia;
