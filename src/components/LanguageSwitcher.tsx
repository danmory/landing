import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="fixed top-4 right-4 flex rounded-lg overflow-hidden border border-blue-200">
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          i18n.language === "en"
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-600 hover:bg-blue-50"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLanguage("ru")}
        className={`px-3 py-1.5 text-sm font-medium transition-colors ${
          i18n.language === "ru"
            ? "bg-blue-500 text-white"
            : "bg-white text-blue-600 hover:bg-blue-50"
        }`}
      >
        RU
      </button>
    </div>
  );
};
