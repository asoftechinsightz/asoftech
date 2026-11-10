import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export function LegalPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: { heading: string; paragraphs: string[] }[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} compact />
      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-navy">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-slate-brand"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
