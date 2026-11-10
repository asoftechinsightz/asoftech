"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav, siteConfig } from "@/content/site";
import { cx } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex min-w-0 flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon"
        >
          <span className="truncate text-base font-semibold tracking-tight text-white sm:text-lg">
            {siteConfig.name}
          </span>
          <span className="hidden text-[11px] tracking-wide text-cyan-neon/90 sm:block">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-md px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            }

            const expanded = activeMenu === item.label;
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <button
                  type="button"
                  className={cx(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition",
                    isActive || expanded
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white",
                  )}
                  aria-expanded={expanded}
                  aria-controls={`${menuId}-${item.label}`}
                  onClick={() =>
                    setActiveMenu((current) =>
                      current === item.label ? null : item.label,
                    )
                  }
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
                </button>
                <div
                  id={`${menuId}-${item.label}`}
                  hidden={!expanded}
                  className="absolute left-0 top-full w-80 pt-2"
                >
                  <div className="rounded-lg border border-white/10 bg-navy-secondary p-2 shadow-soft">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-md px-3 py-2.5 hover:bg-white/5"
                      >
                        <span className="block text-sm font-medium text-white">
                          {child.label}
                        </span>
                        {child.description ? (
                          <span className="mt-0.5 block text-xs text-white/55">
                            {child.description}
                          </span>
                        ) : null}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/contact"
            variant="inverse"
            className="hidden sm:inline-flex"
          >
            Book consultation
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-white/10 bg-navy lg:hidden"
      >
        <Container className="max-h-[calc(100vh-4rem)] space-y-2 overflow-y-auto py-4">
          {primaryNav.map((item) => (
            <div key={item.href} className="space-y-1">
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-semibold text-white hover:bg-white/5"
              >
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block rounded-md px-3 py-2 pl-5 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Button href="/contact" variant="inverse" className="w-full">
            Book consultation
          </Button>
        </Container>
      </div>
    </header>
  );
}
