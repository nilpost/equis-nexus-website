import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { getCopy, localizedPath, type Locale } from "../i18n";
import { LoginForm } from "../investor-login/login-form";

export function InvestorPage({ locale }: { locale: Locale }) {
  const page = getCopy(locale).login;

  return (
    <main className="inner-page login-page" id="top" lang={locale}>
      <SiteHeader locale={locale} />

      <section className="login-hero" aria-labelledby="login-title">
        <div className="inner-orbit" aria-hidden="true">
          <span />
          <span />
          <i />
        </div>

        <div className="login-intro">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 id="login-title">{page.titleA}<br /><em>{page.titleB}</em></h1>
          <p>{page.intro}</p>
          <div className="login-links">
            <Link href={localizedPath(locale, "/portfolio/jingumae-residence")}>
              {page.portfolio}
            </Link>
            <Link href={`${localizedPath(locale)}#top`}>{page.home}</Link>
          </div>
        </div>

        <LoginForm content={page} />
      </section>

      <SiteFooter backToTopHref="#top" locale={locale} />
    </main>
  );
}
