import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  description,
  dark = false,
}: {
  id?: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cx(
        "py-16 sm:py-20",
        dark ? "bg-navy text-cloud" : "bg-transparent text-ink",
        className,
      )}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? (
              <p
                className={cx(
                  "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
                  dark ? "text-cyan-neon" : "text-electric",
                )}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className={cx(
                  "text-3xl font-semibold tracking-tight sm:text-4xl",
                  dark ? "text-white" : "text-navy",
                )}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className={cx(
                  "mt-4 text-base leading-relaxed sm:text-lg",
                  dark ? "text-white/75" : "text-slate-brand",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
