import { useTranslation } from "react-i18next";

const options: Intl.ListFormatOptions = {
  type: "disjunction",
};

const ListItems = () => {
  const { t, i18n } = useTranslation();
  const items1 = ["dog"];
  const items2 = ["dog", "cat"];
  const items3 = ["dog", "cat", "turtle"];
  const locale = i18n.language;

  const makeList = (items: string[]) => {
    return new Intl.ListFormat(locale, options).format(items);
  };

  return (
    <section>
      <h3>{t("list")}</h3>
      <p>{makeList(items1)}</p>
      <p>{makeList(items2)}</p>
      <p>{makeList(items3)}</p>
    </section>
  );
};

export default ListItems;

// import { useTranslation } from "react-i18next";

// const makeList = (items: string[], conjunction: "and" | "or") => {
//   const words = [...items];
//   if (words.length === 0) {
//     return "";
//   } else if (words.length === 1) {
//     return words[0];
//   } else if (words.length === 2) {
//     return words.join(` ${conjunction} `);
//   } else {
//     words[words.length - 1] = `${conjunction} ${words[words.length - 1]}`;
//     return words.join(", ");
//   }
// };

// const ListItems = () => {
//   const { t, i18n } = useTranslation();
//   const items1 = ["dog"];
//   const items2 = ["dog", "cat"];
//   const items3 = ["dog", "cat", "turtle"];
//   const lang = i18n.language;

//   return (
//     <section>
//       <h3>{t("list")}</h3>
//       <p>{makeList(items1, "and")}</p>
//       <p>{makeList(items2, "and")}</p>
//       <p>{makeList(items3, "and")}</p>
//     </section>
//   );
// };

// export default ListItems;
