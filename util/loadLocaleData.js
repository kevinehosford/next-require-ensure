import allLocales from '../locales';

const defaultLocale = 'en';

export async function loadLocaleData(someLocale) {
  let loader = allLocales[someLocale.split('-')[0]];

  return new Promise(function (resolve) {
    // Dynamically load the locales file and call its `loader[LOCALE]` function.
    // It will take care of requiring all the language specific files.
    // This prevents loading a ton of language files that aren't going to be used
    // which would bloat our JS files.
    loader()(someLocale, () => {
      resolve();
    });
  });
}
