import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms and Conditions",
  description: "Terms and Conditions for use of the AsoftechInsightz marketing website.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="Terms governing use of the AsoftechInsightz marketing website."
      sections={[
        {
          heading: "Acceptance",
          paragraphs: [
            "By accessing this website, you agree to these terms. If you do not agree, please do not use the site.",
          ],
        },
        {
          heading: "Informational purpose",
          paragraphs: [
            "Content on this website is provided for general information about AsoftechInsightz services and products. It does not constitute a binding offer, professional advice, or a guarantee of outcomes.",
            "Product pages describe intended capabilities and may include conceptual mockups. Specific functionality, timelines, and commercial terms are confirmed in separate agreements.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Site content, branding, and materials are owned by AsoftechInsightz or its licensors. You may not copy or redistribute them without permission, except for fair personal reference use.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "You agree not to misuse the site, attempt unauthorised access, submit malicious content, or use enquiry forms for spam or unlawful purposes.",
          ],
        },
        {
          heading: "Third-party links",
          paragraphs: [
            "Links to external sites, if present, are provided for convenience. AsoftechInsightz is not responsible for third-party content or practices.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, AsoftechInsightz is not liable for damages arising from use of or reliance on this website’s informational content.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about these terms may be sent to contact@asoftechinsightz.com.",
          ],
        },
      ]}
    />
  );
}
