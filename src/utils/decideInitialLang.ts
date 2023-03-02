// might be also configured according to client ip
export default function decideInitialLang(setLang: string) {
  // declare allowed languages
  var allowedLangs = ['tr', 'en'];

  // check localstorage for current lang
  const initialLang = localStorage.getItem('currentLang');
  if (!initialLang) {
    // assign if there is a valid default language
    if (setLang && allowedLangs.indexOf(setLang) > -1) {
      localStorage.setItem('currentLang', setLang);
      return setLang;
    }
    // detect browser language
    // @ts-ignore
    let browserLanguage =
      window.navigator.language || window.navigator['language'];
    // assign if there is a valid browser language
    if (browserLanguage && allowedLangs.indexOf(browserLanguage) > -1) {
      localStorage.setItem('currentLang', browserLanguage);
      return browserLanguage;
    }
    // assign a default language(tr)
    localStorage.setItem('currentLang', 'tr');
    return 'tr';
  } else {
    // set setInitialLang from localStorage if not malformed
    if (allowedLangs.indexOf(initialLang) > -1) {
      return initialLang;
    } else {
      return 'tr';
    }
  }
}
