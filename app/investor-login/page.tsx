import type { Metadata } from "next";
import { InvestorPage } from "../components/investor-page";
import { getCopy } from "../i18n";

const content = getCopy("en").login;

export const metadata: Metadata = {
  title: content.metaTitle,
  description: content.metaDescription,
  alternates: {
    canonical: "/investor-login",
    languages: {
      en: "/investor-login",
      ca: "/ca/investor-login",
      es: "/es/investor-login",
      ja: "/ja/investor-login",
      "x-default": "/investor-login",
    },
  },
};

export default function InvestorLoginPage() {
  return <InvestorPage locale="en" />;
}
