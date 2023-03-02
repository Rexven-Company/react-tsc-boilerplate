import { useState, useEffect, useRef, useCallback } from 'react';
import decideInitialLang from '../utils/decideInitialLang';

export default function useTranslation(setLang?: string) {
  // declare initial states
  const [{ language, strings }, setLanguage] = useState({
    language: decideInitialLang(setLang!),
    strings: {},
  });
  const initialStringsLoaded = useRef(false);

  // fetch relevant json file
  const fetchTranslation = useCallback(async ({ language }: any) => {
    const module = await import(`../localization/${language}/translate.json`);
    return module.default;
  }, []);

  // update language and call json fetcher function
  const updateLanguage = useCallback(
    async (newLang: string) => {
      console.log(newLang);
      if (initialStringsLoaded.current && newLang === language) return;
      const newStrings = await fetchTranslation({ language: newLang });
      console.log(newStrings);
      initialStringsLoaded.current = true;
      setLanguage({
        language: newLang,
        strings: newStrings,
      });
    },
    [language, fetchTranslation]
  );

  // translate the actual strings
  const t = (translation: string) => {
    // split keys and assign to an array
    var keys = translation.split('.');
    var result = strings;

    // loop through to unnest the desired value
    for (let i = 0; i < keys.length; i++) {
      // @ts-ignore
      result = result[keys[i]];
      if (!result) break;
    }
    // console.log("translation", result)
    // return value or chained keys if malformed
    return result || translation;
  };

  useEffect(() => {
    updateLanguage(language);
  }, [language, updateLanguage]);

  return { t, language, updateLanguage };
}
