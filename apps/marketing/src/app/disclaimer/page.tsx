import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer",
  description: "Disclaimer for informational content on the AsoftechInsightz website.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      description="Important limitations regarding website content, product descriptions, and career-related information."
      sections={[
        {
          heading: "No outcome guarantees",
          paragraphs: [
            "AsoftechInsightz does not guarantee business results, security certifications, job placements, admissions, salary outcomes, or other future events based on website content.",
            "CareerEdge360 supports assessment, discovery, development planning, and coaching. It does not promise employment or placement.",
          ],
        },
        {
          heading: "Conceptual product materials",
          paragraphs: [
            "Product mockups and capability descriptions are conceptual unless otherwise stated in a commercial proposal or agreement. They should not be treated as screenshots of a completed production system.",
          ],
        },
        {
          heading: "No professional advice",
          paragraphs: [
            "Website content is not legal, financial, medical, security certification, or career counselling advice. Seek qualified professionals for decisions that require specialised judgement.",
          ],
        },
        {
          heading: "Accuracy",
          paragraphs: [
            "We aim to keep information current, but content may change as products and services evolve. Contact us for the latest engagement details.",
          ],
        },
      ]}
    />
  );
}
