import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-navy py-32 text-cloud">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-neon">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/70">
          The page you requested is not part of the current sitemap. Try the
          homepage or contact us for help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="inverse">
            Go home
          </Button>
          <Button href="/contact" variant="ghost">
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}
