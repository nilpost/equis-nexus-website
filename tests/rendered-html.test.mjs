import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set(
    "test",
    `${process.pid}-${Date.now()}-${path.replaceAll("/", "-")}`,
  );
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(path, "https://equis-nexus.com"), {
      headers: { accept: "text/html", host: "equis-nexus.com" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the expanded Equis Nexus home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>Equis Nexus \| Real Estate Investment in Japan<\/title>/i,
  );
  assert.match(html, /Rooted in Japan\./);
  assert.match(html, /Where opportunity/);
  assert.match(html, /Equis represents the X/i);
  assert.match(html, /Jingumae/);
  assert.match(html, /Asset 01/);
  assert.match(html, /href="\/portfolio\/jingumae-residence"/);
  assert.match(html, /href="\/investor-login"/);
  assert.match(html, /A bridge between Japan/i);
  assert.match(html, /Ｅｑｕｉｓ　Ｎｅｘｕｓ合同会社/);
  assert.match(html, /8011003023839/);
  assert.match(html, /icontact@equis-nexus\.com/);
  assert.match(html, /https:\/\/equis-nexus\.com\/og-multilingual\.png/);
  assert.match(html, /hrefLang="ca"/i);
  assert.match(html, /hrefLang="es"/i);
  assert.match(html, /hrefLang="ja"/i);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("localized home routes render Catalan, Spanish, and Japanese content", async () => {
  const cases = [
    ["/ca", /Arrelats al Japó\./, /Accés d’inversors/],
    ["/es", /Arraigados en Japón\./, /Acceso inversores/],
    ["/ja", /日本に根ざし、/, /投資家ログイン/],
  ];

  for (const [path, heading, login] of cases) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, heading);
    assert.match(html, login);
    assert.match(html, /<option value="en"[^>]*>English<\/option>/);
    assert.match(html, /<option value="ca"[^>]*>Català<\/option>/);
    assert.match(html, /<option value="es"[^>]*>Español<\/option>/);
    assert.match(html, /<option value="ja"[^>]*>日本語<\/option>/);
  }
});

test("portfolio route publishes approved facts and withholds financial figures", async () => {
  const response = await render("/portfolio/jingumae-residence");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Jingumae Residence \| Equis Nexus Portfolio/);
  assert.match(html, /A first asset\./);
  assert.match(html, /Reinforced concrete/);
  assert.match(html, /Five floors/);
  assert.match(html, /Independent verification pending/);
  assert.match(html, /No asset-level financial percentage is currently approved/);
  assert.match(html, /not constitute an offer, solicitation or investment recommendation/i);
  assert.match(html, /Request investor brief/i);
  assert.doesNotMatch(
    html,
    /5-36-10|>401<|¥\s*\d|JPY\s*\d|mortgage provider|interest rate/i,
  );
});

test("localized portfolio routes preserve the public disclosure boundary", async () => {
  const cases = [
    ["/ca/portfolio/jingumae-residence", /Fonaments verificats/],
    ["/es/portfolio/jingumae-residence", /Fundamentos verificados/],
    ["/ja/portfolio/jingumae-residence", /確認済みの基本情報/],
  ];

  for (const [path, expected] of cases) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, expected);
    assert.doesNotMatch(
      html,
      /5-36-10|>401<|¥\s*\d|JPY\s*\d|mortgage provider|interest rate/i,
    );
  }
});

test("investor login is a non-transmitting browser-only preview", async () => {
  const response = await render("/investor-login");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Investor Access \| Equis Nexus/);
  assert.match(html, /Email address/);
  assert.match(html, /Investor access code/);
  assert.match(html, /This preview does not accept or store real credentials/);
  assert.doesNotMatch(html, /type="password"|<form[^>]+action=|<form[^>]+method=/i);

  const source = await readFile(
    new URL("../app/investor-login/login-form.tsx", import.meta.url),
    "utf8",
  );
  assert.match(source, /event\.preventDefault\(\)/);
  assert.match(source, /setAccessCode\(""\)/);
  assert.match(source, /messageRef\.current\?\.focus\(\)/);
  assert.doesNotMatch(
    source,
    /\bfetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|document\.cookie|server action/i,
  );
});

test("localized investor previews remain non-authenticating", async () => {
  const cases = [
    ["/ca/investor-login", /Codi d’accés d’inversor/],
    ["/es/investor-login", /Código de acceso de inversor/],
    ["/ja/investor-login", /投資家アクセスコード/],
  ];

  for (const [path, expected] of cases) {
    const response = await render(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, expected);
    assert.doesNotMatch(
      html,
      /type="password"|<form[^>]+action=|<form[^>]+method=/i,
    );
  }
});

test("language preference uses browser language once and remembers explicit choice locally", async () => {
  const source = await readFile(
    new URL("../app/components/language-switcher.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /navigator\.languages/);
  assert.match(source, /navigator\.language/);
  assert.match(source, /localStorage\.getItem\(preferenceKey\)/);
  assert.match(source, /localStorage\.setItem\(preferenceKey, nextLocale\)/);
  assert.match(source, /target !== locale/);
  assert.doesNotMatch(source, /\bfetch\s*\(|XMLHttpRequest|document\.cookie/i);
});
