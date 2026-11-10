import { describe, expect, it } from "vitest";
import { industrySlugs } from "@/content/industries";
import { productSlugs } from "@/content/products";
import { serviceSlugs } from "@/content/services";
import { primaryNav } from "@/content/site";

describe("marketing sitemap content", () => {
  it("exposes the four official product slugs", () => {
    expect(productSlugs).toEqual([
      "growthedge360",
      "careeredge360",
      "cyberedge360",
      "opsedge360",
    ]);
  });

  it("covers the PRD service catalogue", () => {
    expect(serviceSlugs).toContain("website-development");
    expect(serviceSlugs).toContain("automated-sales-marketing");
    expect(serviceSlugs).toContain("cybersecurity-grc");
    expect(serviceSlugs).toContain("career-coaching");
    expect(serviceSlugs).toHaveLength(16);
  });

  it("covers industry landing pages", () => {
    expect(industrySlugs).toEqual(
      expect.arrayContaining([
        "bfsi",
        "insurance",
        "retail",
        "healthcare",
        "government",
        "manufacturing",
        "telecom",
        "energy",
        "it-ites",
      ]),
    );
  });

  it("keeps primary navigation linked to real sections", () => {
    const hrefs = primaryNav.map((item) => item.href);
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "/products",
        "/services",
        "/industries",
        "/insights",
        "/about",
        "/careers",
        "/contact",
      ]),
    );
  });
});
