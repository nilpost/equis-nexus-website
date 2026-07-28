"use client";

import { useEffect } from "react";
import {
  isLocale,
  languageNames,
  locales,
  pathForLocale,
  type Locale,
} from "../i18n";

const preferenceKey = "equis-nexus-language";

function detectedLocale(): Locale {
  const requested = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const language of requested) {
    const candidate = language.toLowerCase().split("-")[0];
    if (isLocale(candidate)) return candidate;
  }

  return "en";
}

export function LanguagePreference({ locale }: { locale: Locale }) {
  useEffect(() => {
    const stored = window.localStorage.getItem(preferenceKey);
    const preferred = stored && isLocale(stored) ? stored : null;
    const target = preferred ?? (locale === "en" ? detectedLocale() : locale);

    if (target !== locale) {
      window.location.replace(
        `${pathForLocale(window.location.pathname, target)}${window.location.hash}`,
      );
    }
  }, [locale]);

  return null;
}

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  function changeLanguage(nextLocale: string) {
    if (!isLocale(nextLocale)) return;
    window.localStorage.setItem(preferenceKey, nextLocale);
    window.location.assign(
      `${pathForLocale(window.location.pathname, nextLocale)}${window.location.hash}`,
    );
  }

  return (
    <label className="language-switcher">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={locale}
        onChange={(event) => changeLanguage(event.target.value)}
      >
        {locales.map((language) => (
          <option value={language} key={language}>
            {languageNames[language]}
          </option>
        ))}
      </select>
    </label>
  );
}
