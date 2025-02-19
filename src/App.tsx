import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-4 right-4 flex items-center gap-4">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {t('hero.description')}
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
          {t('hero.cta')}
        </button>
      </header>
      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('features.codeCompletion.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.codeCompletion.description')}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('features.naturalLanguage.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.naturalLanguage.description')}</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('features.learn.title')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('features.learn.description')}</p>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-purple-500 mb-2">{t('stats.lines.value')}</h4>
              <p className="text-gray-600 dark:text-gray-300">{t('stats.lines.label')}</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-500 mb-2">{t('stats.speed.value')}</h4>
              <p className="text-gray-600 dark:text-gray-300">{t('stats.speed.label')}</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-purple-500 mb-2">{t('stats.languages.value')}</h4>
              <p className="text-gray-600 dark:text-gray-300">{t('stats.languages.label')}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Languages Support */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('languagesSection.title')}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['JavaScript', 'Python', 'TypeScript', 'Java', 'Go', 'Ruby', 'PHP'].map((lang) => (
            <span key={lang} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full">
              {lang}
            </span>
          ))}
        </div>
      </section>
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('cta.title')}
        </h2>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition">
          {t('cta.button')}
        </button>
      </section>
    </div>
  );
}
export default App;