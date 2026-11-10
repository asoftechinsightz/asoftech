import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for the AsoftechInsightz marketing website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How cookies and similar technologies may be used on this marketing website."
      sections={[
        {
          heading: "What cookies are",
          paragraphs: [
            "Cookies are small text files stored on your device that help websites function, remember preferences, or understand usage patterns.",
          ],
        },
        {
          heading: "How we use cookies",
          paragraphs: [
            "This site may use essential cookies required for security, load balancing, or basic functionality.",
            "If analytics or preference cookies are enabled in a future release, we will update this policy and provide appropriate notices or controls.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can control cookies through your browser settings. Blocking some cookies may affect site functionality.",
          ],
        },
        {
          heading: "Updates",
          paragraphs: [
            "This policy may change as our tooling changes. The latest version will be published on this page.",
          ],
        },
      ]}
    />
  );
}
