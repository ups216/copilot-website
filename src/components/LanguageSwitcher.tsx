import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
    >
      <option value="en" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">English</option>
      <option value="zh" className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">中文</option>
    </select>
  );
}