import { SiteFooter, SiteHeader } from "./site-chrome";
import {
  approvedPublicFacts,
  approvedPublicMetrics,
  jingumaeResidence,
} from "../data/portfolio";
import { getCopy, localizedPath, type Locale } from "../i18n";

const asset = jingumaeResidence;

export function AssetPage({ locale }: { locale: Locale }) {
  const content = getCopy(locale);
  const page = content.asset;
  const publicFacts = approvedPublicFacts(asset);
  const publicMetrics = approvedPublicMetrics(asset);

  return (
    <main className="inner-page asset-page" id="top" lang={locale}>
      <SiteHeader locale={locale} />

      <section className="asset-hero" aria-labelledby="asset-title">
        <div className="asset-blueprint" aria-hidden="true">
          <span className="blueprint-ring blueprint-ring-one" />
          <span className="blueprint-ring blueprint-ring-two" />
          <span className="blueprint-axis blueprint-axis-x" />
          <span className="blueprint-axis blueprint-axis-y" />
          <span className="blueprint-block block-one" />
          <span className="blueprint-block block-two" />
          <i />
        </div>

        <div className="asset-title-block">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 id="asset-title">
            {page.titleA}
            <span>{page.titleB}</span>
          </h1>
          <p className="asset-location">{page.location}</p>
        </div>

        <div className="asset-status">
          <span>{page.statusLabel}</span>
          <strong>{page.status}</strong>
          <span>{page.strategyLabel}</span>
          <strong>{page.strategy}</strong>
        </div>
      </section>

      <section className="asset-introduction" aria-labelledby="thesis-title">
        <div>
          <p className="section-number">{page.thesisNumber}</p>
          <h2 id="thesis-title">{page.thesisTitleA}<br /><em>{page.thesisTitleB}</em></h2>
        </div>
        <div className="thesis-list">
          {page.thesis.map((point, index) => (
            <article key={point}>
              <span>0{index + 1}</span>
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="asset-facts" aria-labelledby="facts-title">
        <div className="asset-section-heading">
          <p className="section-number">{page.profileNumber}</p>
          <h2 id="facts-title">{page.profileTitle}</h2>
          <p>{page.profileIntro}</p>
        </div>
        <dl>
          {publicFacts.map((fact) => {
            const localized =
              page.facts[fact.label as keyof typeof page.facts];
            return (
              <div key={fact.label}>
                <dt>{localized[0]}</dt>
                <dd>{localized[1]}</dd>
              </div>
            );
          })}
        </dl>
      </section>

      <section className="asset-timeline" aria-labelledby="timeline-title">
        <div className="asset-section-heading">
          <p className="section-number">{page.timelineNumber}</p>
          <h2 id="timeline-title">{page.timelineTitle}</h2>
        </div>
        <div className="timeline-track">
          {asset.timeline
            .filter(
              (item) =>
                item.approval === "approved" &&
                item.disclosure === "public",
            )
            .map((item, index) => {
              const localized = page.timeline[index];
              return (
                <article key={item.title}>
                  <span className="timeline-node">{index + 1}</span>
                  <p>{localized[0]}</p>
                  <h3>{localized[1]}</h3>
                  <div>{localized[2]}</div>
                </article>
              );
            })}
        </div>
      </section>

      <section className="asset-performance" aria-labelledby="performance-title">
        <div className="asset-section-heading">
          <p className="section-number">{page.performanceNumber}</p>
          <h2 id="performance-title">{page.performanceTitleA}<br /><em>{page.performanceTitleB}</em></h2>
          <p>{page.performanceIntro}</p>
        </div>

        {publicMetrics.length > 0 ? (
          <dl className="performance-grid">
            {publicMetrics.map((metric) => {
              const metricIndex = asset.metrics.findIndex(
                (candidate) => candidate.key === metric.key,
              );
              return (
                <div key={metric.key}>
                  <dt>{page.metrics[metricIndex][0]}</dt>
                  <dd>{metric.value}{metric.suffix}</dd>
                  <small>{page.asOf} {metric.asOf}</small>
                </div>
              );
            })}
          </dl>
        ) : (
          <div className="performance-pending">
            <p>{page.reportingStatus}</p>
            <strong>{page.pending}</strong>
            <span>{page.pendingDetail}</span>
          </div>
        )}

        <div className="method-grid">
          {asset.metrics.map((metric, index) => (
            <article key={metric.key}>
              <span>{page.metrics[index][0]}</span>
              <p>{page.metrics[index][1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="asset-brief" aria-labelledby="brief-title">
        <div>
          <p className="section-number">{page.briefNumber}</p>
          <h2 id="brief-title">{page.briefTitleA}<br /><em>{page.briefTitleB}</em></h2>
        </div>
        <div className="brief-copy">
          <p>{page.briefText}</p>
          <div className="brief-actions">
            <a
              className="primary-action"
              href="mailto:icontact@equis-nexus.com?subject=Investor%20brief%20request%20%E2%80%94%20Jingumae%20Residence"
            >
              <span>{page.requestBrief}</span>
              <span className="action-arrow" aria-hidden="true">↗</span>
            </a>
            <a
              className="text-action"
              href={localizedPath(locale, "/investor-login")}
            >
              {page.login}
            </a>
          </div>
        </div>
      </section>

      <aside className="asset-disclosure" aria-label={page.important}>
        <strong>{page.important}</strong>
        <p>{page.disclosure}</p>
        <p>
          {page.sources}{" "}
          <a
            href="https://www.mitsui-chintai.co.jp/rf.eng/tatemono/68067"
            rel="noreferrer"
            target="_blank"
          >
            Mitsui Resident First ↗
          </a>{" "}
          /{" "}
          <a
            href="https://housingjapan.com/buy/jingumae-5-chome-blanche/"
            rel="noreferrer"
            target="_blank"
          >
            Housing Japan ↗
          </a>
          . {page.authoritative}
        </p>
      </aside>

      <SiteFooter backToTopHref="#top" locale={locale} />
    </main>
  );
}
