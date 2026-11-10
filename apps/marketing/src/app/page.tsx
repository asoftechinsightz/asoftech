import { HomeHero } from "@/components/home/HomeHero";
import { HomeSections } from "@/components/home/HomeSections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AsoftechInsightz",
  description:
    "Build. Automate. Secure. Grow. Enterprise technology consulting, digital engineering, AI automation, and SaaS products from AsoftechInsightz.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSections />
    </>
  );
}
