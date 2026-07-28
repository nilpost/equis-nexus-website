import type { Metadata } from "next";
import { getCopy, localizedPath, type Locale } from "./i18n";

const descriptions: Record<Locale, string> = {
  en: "Equis Nexus is a Tokyo-based real-estate investment and asset-management company connecting Japanese assets with long-term international opportunity.",
  ca: "Equis Nexus és una companyia d’inversió i gestió d’actius immobiliaris amb seu a Tòquio que connecta actius japonesos amb oportunitats internacionals a llarg termini.",
  es: "Equis Nexus es una compañía de inversión y gestión de activos inmobiliarios con sede en Tokio que conecta activos japoneses con oportunidades internacionales a largo plazo.",
  ja: "Equis Nexusは、日本の不動産と長期的な国際機会をつなぐ、東京拠点の投資・資産運用会社です。",
};

const homeTitles: Record<Locale, string> = {
  en: "Equis Nexus | Real Estate Investment in Japan",
  ca: "Equis Nexus | Inversió immobiliària al Japó",
  es: "Equis Nexus | Inversión inmobiliaria en Japón",
  ja: "Equis Nexus | 日本の不動産投資",
};

const languagePaths = (path: string) => ({
  en: localizedPath("en", path),
  ca: localizedPath("ca", path),
  es: localizedPath("es", path),
  ja: localizedPath("ja", path),
  "x-default": localizedPath("en", path),
});

export function homeMetadata(locale: Locale): Metadata {
  return {
    title: homeTitles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: localizedPath(locale),
      languages: languagePaths("/"),
    },
  };
}

export function assetMetadata(locale: Locale): Metadata {
  const content = getCopy(locale).asset;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: localizedPath(locale, "/portfolio/jingumae-residence"),
      languages: languagePaths("/portfolio/jingumae-residence"),
    },
  };
}

export function loginMetadata(locale: Locale): Metadata {
  const content = getCopy(locale).login;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: localizedPath(locale, "/investor-login"),
      languages: languagePaths("/investor-login"),
    },
  };
}
