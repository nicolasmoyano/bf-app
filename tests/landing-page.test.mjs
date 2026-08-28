import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

test("homepage presents the focused AI visibility offer", () => {
  const page = read("app/page.tsx");

  assert.match(page, /Be the local expert AI can find/i);
  assert.match(page, /AI Visibility Audit/i);
  assert.match(page, /6,900 SEK/i);
  assert.match(page, /Book a free fit call/i);
  assert.match(page, /No one can guarantee/i);
});

test("homepage explains concrete evidence and deliverables", () => {
  const page = read("app/page.tsx");

  for (const phrase of [
    "Business truth set",
    "Search and AI benchmark",
    "Website and structured data audit",
    "90-day action plan",
  ]) {
    assert.match(page, new RegExp(phrase, "i"));
  }
});

test("site publishes crawl discovery files and service schema", () => {
  assert.equal(existsSync(new URL("app/robots.ts", root)), true);
  assert.equal(existsSync(new URL("app/sitemap.ts", root)), true);

  const page = read("app/page.tsx");
  assert.match(page, /"@type": "Organization"/);
  assert.match(page, /"@type": "Service"/);
  assert.doesNotMatch(page, /ProfessionalService/);
  assert.match(page, /Offer/);
});

test("canonical URLs use the final www hostname", () => {
  for (const path of ["app/layout.tsx", "app/page.tsx", "app/robots.ts", "app/sitemap.ts"]) {
    const source = read(path);
    assert.match(source, /https:\/\/www\.brandform\.studio/);
    assert.doesNotMatch(source, /https:\/\/brandform\.studio/);
  }
});

test("metadata describes the specialized service", () => {
  const layout = read("app/layout.tsx");

  assert.match(layout, /AI Visibility for Local Experts/i);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
});
