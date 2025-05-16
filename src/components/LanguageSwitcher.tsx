import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher = ({ onLanguageChange }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    onLanguageChange(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex space-x-2">
        <button
          onClick={() => changeLanguage("en")}
          className={`btn ${
            i18n.language === "en" ? "btn-primary" : "bg-secondary"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          className={`btn ${
            i18n.language === "ru" ? "btn-primary" : "bg-secondary"
          }`}
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
