import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to React and react-i18next",
      language: "Language",
      date: "Date",
      price: "Price",
      likes: "Likes",
      "relative-time": "Relative Time",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue à React et react-i18next",
      language: "Langue",
      date: "Dāt",
      price: "Prix",
      likes: "Likes",
      "relative-time": "Relative Time",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a React y react-i18next",
      language: "Idioma",
      date: "Fecha",
      price: "Precio",
      likes: "Likes",
      "relative-time": "Relative Time",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
