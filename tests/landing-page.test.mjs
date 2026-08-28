import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");

test("homepage positions Brandform around being sales-ready", () => {
  const page = read("app/page.tsx");

  assert.match(page, /Make your business easier to buy from/i);
  assert.match(page, /Buyer Kit Sprint/i);
  assert.match(page, /Client-Ready Presence/i);
  assert.match(page, /Document Rescue Sprint/i);
  assert.match(page, /Book a free fit call/i);
  assert.doesNotMatch(page, /Be the local expert AI can find/i);
});

test("homepage makes the buyer-kit outcome and scope concrete", () => {
  const page = read("app/page.tsx");

  for (const phrase of [
    "Retail buyer one-pager",
    "Product and range sheet",
    "Order-ready leave-behind",
    "6,900 SEK",
  ]) {
    assert.match(page, new RegExp(phrase, "i"));
  }
});

test("buyer kit demo is a real route with fictional-demo disclosure", () => {
  assert.equal(existsSync(new URL("app/buyer-kit/page.tsx", root)), true);
  const demo = read("app/buyer-kit/page.tsx");

  assert.match(demo, /FJÄLLGLASS/i);
  assert.match(demo, /Concept buyer kit/i);
  assert.match(demo, /fictional brand/i);
  assert.match(demo, /EAN/i);
  assert.match(demo, /Example buyer next steps/i);
  assert.doesNotMatch(demo, /<button/);
});

test("buyer kit owns its header so the global navigation cannot overlay it", () => {
  const navbar = read("app/components/Navbar/Navbar.tsx");

  assert.match(navbar, /usePathname/);
  assert.match(navbar, /pathname === "\/buyer-kit"/);
});

test("site publishes crawl discovery files and accurate services schema", () => {
  assert.equal(existsSync(new URL("app/robots.ts", root)), true);
  assert.equal(existsSync(new URL("app/sitemap.ts", root)), true);

  const page = read("app/page.tsx");
  assert.match(page, /"@type": "Organization"/);
  assert.match(page, /"@type": "Service"/);
  assert.doesNotMatch(page, /ProfessionalService/);
  assert.match(page, /Buyer Kit Sprint/);
});

test("canonical URLs use the final www hostname", () => {
  for (const path of ["app/layout.tsx", "app/page.tsx", "app/robots.ts", "app/sitemap.ts"]) {
    const source = read(path);
    assert.match(source, /https:\/\/www\.brandform\.studio/);
    assert.doesNotMatch(source, /https:\/\/brandform\.studio/);
  }
});

test("metadata describes Brandform's sales-ready offering", () => {
  const layout = read("app/layout.tsx");

  assert.match(layout, /Sales-ready design for small businesses/i);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /openGraph/);
});
