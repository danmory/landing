import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { AboutMe } from "./components/AboutMe";
import { GetInTouch } from "./components/GetInTouch";
import { Experience } from "./components/Experience";
import "./i18n/config";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <LanguageSwitcher />
      <div className="w-full max-w-7xl mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-8 space-y-4 md:space-y-8">
              <AboutMe />
              <GetInTouch />
            </div>
          </div>

          <div className="md:col-span-8">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
