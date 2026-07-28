import { SiteFooter, SiteHeader } from "./site-chrome";
import { approvedPublicFacts, jingumaeResidence } from "../data/portfolio";
import { getCopy, localizedPath, type Locale } from "../i18n";

const asset = jingumaeResidence;

export function HomePage({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const home = content.home;
  const assetCopy = content.asset;
  const featuredFacts = approvedPublicFacts(asset)
    .filter((fact) => ["Acquired", "Completion", "Structure"].includes(fact.label))
    .map((fact) => ({
      label: assetCopy.facts[fact.label as keyof typeof assetCopy.facts][0],
      value: assetCopy.facts[fact.label as keyof typeof assetCopy.facts][1],
    }));

  return (
    <main lang={locale}>
      <SiteHeader locale={locale} />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true">
          <span className="axis axis-x" />
          <span className="axis axis-y" />
          <span className="scope scope-outer" />
          <span className="scope scope-inner" />
          <span className="origin" />
          <span className="coordinate">35.6762° N<br />139.6503° E</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{home.hero.eyebrow}</p>
          <h1 id="hero-title">
            {home.hero.titleA}
            <span>{home.hero.titleB}</span>
          </h1>
          <p className="hero-intro">{home.hero.intro}</p>
          <div className="hero-actions">
            <a className="primary-action" href="#purpose">
              <span>{home.hero.purpose}</span>
              <span className="action-arrow" aria-hidden="true">↓</span>
            </a>
            <a
              className="text-action"
              href={localizedPath(locale, "/portfolio/jingumae-residence")}
            >
              {home.hero.asset} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero-index" aria-label={home.hero.focusLabel}>
          <span>{home.hero.indexA}</span>
          <strong>{home.hero.valueA}</strong>
          <span>{home.hero.indexB}</span>
          <strong>{home.hero.valueB}</strong>
        </div>
      </section>

      <section className="purpose" id="purpose" aria-labelledby="purpose-title">
        <div className="section-label">
          <p className="section-number">{home.purpose.number}</p>
          <span className="label-line" />
        </div>
        <div className="purpose-content">
          <p className="purpose-kicker">{home.purpose.kicker}</p>
          <h2 id="purpose-title">
            {home.purpose.titleA}
            <span>{home.purpose.titleB}</span>
          </h2>
          <div className="purpose-detail">
            <p className="lead">{home.purpose.lead}</p>
            <p>{home.purpose.detail}</p>
          </div>
        </div>
      </section>

      <section className="name-story" id="our-name" aria-labelledby="name-title">
        <div className="name-diagram" aria-hidden="true">
          <span className="name-line name-line-one" />
          <span className="name-line name-line-two" />
          <span className="name-ring" />
          <i />
        </div>
        <div className="section-label section-label-light">
          <p className="section-number">{home.name.number}</p>
          <span className="label-line" />
        </div>
        <div className="name-copy">
          <p className="purpose-kicker">{home.name.kicker}</p>
          <h2 id="name-title">{home.name.titleA}<br /><em>{home.name.titleB}</em></h2>
          <p>{home.name.first}</p>
          <p>{home.name.second}</p>
        </div>
        <div className="name-legend" aria-label={home.name.meaning}>
          <div>
            <span>X</span>
            <p>{home.name.equis}</p>
          </div>
          <div>
            <span>◎</span>
            <p>{home.name.nexus}</p>
          </div>
        </div>
      </section>

      <section className="focus" id="focus" aria-labelledby="focus-title">
        <div className="focus-heading">
          <div className="section-label section-label-light">
            <p className="section-number">{home.focus.number}</p>
            <span className="label-line" />
          </div>
          <p className="focus-status"><span /> {home.focus.status}</p>
          <h2 id="focus-title">{home.focus.title}</h2>
          <p className="focus-intro">{home.focus.intro}</p>
        </div>

        <div className="pillar-grid">
          {home.focus.pillars.map((pillar, index) => (
            <article className="pillar" key={pillar.title}>
              <span className="pillar-number">0{index + 1}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
              <span className="pillar-mark" aria-hidden="true">＋</span>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-feature" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-topline">
          <div className="section-label">
            <p className="section-number">{home.portfolio.number}</p>
            <span className="label-line" />
          </div>
          <p>{home.portfolio.owned}</p>
        </div>

        <div className="portfolio-visual" aria-hidden="true">
          <span className="portfolio-ring ring-a" />
          <span className="portfolio-ring ring-b" />
          <span className="portfolio-plan plan-a" />
          <span className="portfolio-plan plan-b" />
          <span className="portfolio-cross cross-x" />
          <span className="portfolio-cross cross-y" />
          <i />
        </div>

        <div className="portfolio-content">
          <p className="purpose-kicker">{assetCopy.eyebrow} · {assetCopy.location}</p>
          <h2 id="portfolio-title">{home.portfolio.titleA}<br /><em>{home.portfolio.titleB}</em></h2>
          <p className="portfolio-summary">{home.portfolio.summary}</p>
          <dl className="portfolio-facts">
            {featuredFacts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className="portfolio-actions">
            <a
              className="primary-action"
              href={localizedPath(locale, "/portfolio/jingumae-residence")}
            >
              <span>{home.portfolio.explore}</span>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </a>
            <a
              className="text-action"
              href={localizedPath(locale, "/investor-login")}
            >
              {home.portfolio.login}
            </a>
          </div>
        </div>
      </section>

      <section className="vision" id="vision" aria-labelledby="vision-title">
        <div className="vision-orbit" aria-hidden="true">
          <span />
          <span />
          <i />
        </div>
        <div className="section-label">
          <p className="section-number">{home.vision.number}</p>
          <span className="label-line" />
        </div>
        <div className="vision-copy">
          <p className="purpose-kicker">{home.vision.kicker}</p>
          <h2 id="vision-title">
            {home.vision.titleA}
            <span>{home.vision.titleB}</span>
          </h2>
          <p className="vision-lead">{home.vision.lead}</p>
          <p className="vision-note">{home.vision.note}</p>
        </div>
        <div className="horizon">
          <p>{home.vision.horizon}</p>
          <ul>
            {home.vision.items.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
          <small>{home.vision.disclaimer}</small>
        </div>
      </section>

      <section className="principles" aria-labelledby="principles-title">
        <p className="section-number">{home.principles.number}</p>
        <h2 id="principles-title">{home.principles.title}</h2>
        <div className="principles-grid">
          {home.principles.items.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="company" id="company" aria-labelledby="company-title">
        <div className="company-heading">
          <p className="section-number">{home.company.number}</p>
          <h2 id="company-title">{home.company.title}</h2>
        </div>

        <dl className="company-grid">
          <div>
            <dt>{home.company.registered}</dt>
            <dd>{content.legalName}</dd>
          </div>
          <div>
            <dt>{home.company.form}</dt>
            <dd>{home.company.formValue}</dd>
          </div>
          <div>
            <dt>{home.company.numberLabel}</dt>
            <dd>{content.corporateNumber}</dd>
          </div>
          <div>
            <dt>{home.company.office}</dt>
            <dd>{home.company.officeValue}</dd>
          </div>
        </dl>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <p className="section-number">{home.contact.number}</p>
        <div>
          <p className="contact-kicker">{home.contact.kicker}</p>
          <h2 id="contact-title">{home.contact.titleA}<br /><em>{home.contact.titleB}</em></h2>
          <a href={`mailto:${content.email}`}>
            {content.email}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <SiteFooter backToTopHref="#top" locale={locale} />
    </main>
  );
}
