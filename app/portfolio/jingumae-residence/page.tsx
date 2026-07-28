import type { Metadata } from "next";
import { AssetPage } from "../../components/asset-page";
import { getCopy } from "../../i18n";

const content = getCopy("en").asset;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/portfolio/jingumae-residence",
    languages: {
      en: "/portfolio/jingumae-residence",
      ca: "/ca/portfolio/jingumae-residence",
      es: "/es/portfolio/jingumae-residence",
      ja: "/ja/portfolio/jingumae-residence",
      "x-default": "/portfolio/jingumae-residence",
    },
  },
};

export default function JingumaeResidencePage() {
  return <AssetPage locale="en" />;
}
