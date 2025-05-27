import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { AboutMe } from "./components/AboutMe";
import { GetInTouch } from "./components/GetInTouch";
import { Experience } from "./components/Experience";
import "./i18n/config";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 flex items-center">
      <LanguageSwitcher />
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div className="sticky top-8 space-y-8">
              <AboutMe />
              <GetInTouch />
            </div>
          </div>

          <div className="col-span-8">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
