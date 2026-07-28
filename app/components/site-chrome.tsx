import Link from "next/link";
import { getCopy, localizedPath, type Locale } from "../i18n";
import {
  LanguagePreference,
  LanguageSwitcher,
} from "./language-switcher";

type SiteHeaderProps = {
  theme?: "light" | "dark";
  locale?: Locale;
};

export function SiteHeader({
  theme = "dark",
  locale = "en",
}: SiteHeaderProps) {
  const content = getCopy(locale);
  const home = localizedPath(locale);

  return (
    <header className={`site-header site-header-${theme}`}>
      <LanguagePreference locale={locale} />
      <Link className="brand" href={`${home}#top`} aria-label="Equis Nexus home">
        <span className="brand-mark" aria-hidden="true">EN</span>
        <span className="brand-name">Equis Nexus</span>
      </Link>

      <div className="header-actions">
        <nav aria-label="Primary navigation">
          <Link href={`${home}#purpose`}>{content.nav.purpose}</Link>
          <Link href={`${home}#focus`}>{content.nav.focus}</Link>
          <Link href={`${home}#portfolio`}>{content.nav.portfolio}</Link>
          <Link href={`${home}#vision`}>{content.nav.vision}</Link>
          <Link
            className="nav-login"
            href={localizedPath(locale, "/investor-login")}
          >
            {content.nav.login}
          </Link>
          <Link className="nav-contact" href={`${home}#contact`}>
            {content.nav.contact}
          </Link>
        </nav>
        <LanguageSwitcher locale={locale} label={content.languageLabel} />
      </div>
    </header>
  );
}

type SiteFooterProps = {
  backToTopHref?: string;
  locale?: Locale;
};

export function SiteFooter({
  backToTopHref = "#top",
  locale = "en",
}: SiteFooterProps) {
  const content = getCopy(locale);

  return (
    <footer>
      <span>© 2026 Equis Nexus</span>
      <span>{content.footer.location}</span>
      <Link href={localizedPath(locale, "/investor-login")}>
        {content.footer.login}
      </Link>
      <Link href={backToTopHref}>{content.footer.top}</Link>
    </footer>
  );
}
