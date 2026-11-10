import { LegalPage } from "@/components/legal/LegalPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for the AsoftechInsightz marketing website and enquiries.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How AsoftechInsightz handles personal information submitted through this marketing website."
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            "This policy applies to personal information collected through www.asoftechinsightz.com and related enquiry forms operated by AsoftechInsightz.",
            "It does not invent data practices for products that are not yet collecting production end-user data through this site.",
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "When you submit an enquiry, we may collect your name, email address, company, phone number, interest area, and message content.",
            "Technical logs such as IP address, browser type, and request metadata may be processed by hosting and security infrastructure as part of normal website operations.",
          ],
        },
        {
          heading: "How we use information",
          paragraphs: [
            "We use enquiry information to respond to your request, understand service interest, and improve our marketing site and follow-up process.",
            "We do not sell personal information.",
          ],
        },
        {
          heading: "Sharing",
          paragraphs: [
            "We may share information with service providers who help us operate email, hosting, analytics, or form delivery—only as needed to provide those services.",
            "We may disclose information if required by law or to protect the rights, safety, and integrity of our systems and users.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Enquiry records are retained only as long as needed for follow-up, legitimate business records, or legal obligations, then deleted or anonymised where practical.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You may request access, correction, or deletion of enquiry information by emailing contact@asoftechinsightz.com. We may need to verify your request.",
          ],
        },
        {
          heading: "Minors",
          paragraphs: [
            "This marketing website is intended for business and adult audiences. Where CareerEdge360 programmes involve minors, privacy and guardian consent requirements are addressed in programme design and are not waived by this policy.",
          ],
        },
        {
          heading: "Updates",
          paragraphs: [
            "We may update this policy as our practices evolve. The page will reflect the latest version available on this website.",
          ],
        },
      ]}
    />
  );
}
