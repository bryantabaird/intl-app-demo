import { useTranslation } from "react-i18next";
import DateTime from "./Date";
import ListFormat from "./ListFormat";
import Pluralization from "./Pluralization";
import Pricing from "./Pricing";
import RelativeTime from "./RelativeTime";
import SocialMedia from "./SocialMedia";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <main>
      <section>
        <h1>{t("welcome")}</h1>
      </section>

      <DateTime />
      <Pricing />
      <SocialMedia />
      <RelativeTime />
      <Pluralization />
      <ListFormat />

      <section>
        <h3>{t("language")}</h3>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("fr")}>French</button>
        <button onClick={() => i18n.changeLanguage("es")}>Spanish</button>
      </section>
    </main>
  );
}

export default App;
