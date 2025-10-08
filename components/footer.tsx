import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';

export function Footer() {
  const quickLinks = services.filter((s) => s.type === 'quick-link');

  return (
    <footer
      className="w-full text-primary-foreground relative overflow-hidden"
      style={{
        backgroundImage: 'url(/uva-grounds.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="max-w-[1600px] mx-auto px-8 py-12 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/bat_rgb_ko.png"
            alt="Frank Batten School of Leadership and Public Policy"
            width={300}
            height={100}
            className="h-auto"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {quickLinks.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm hover:text-accent transition-colors whitespace-nowrap"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/70 text-center">
          <p>&copy; {new Date().getFullYear()} Frank Batten School of Leadership and Public Policy, University of Virginia</p>
        </div>
      </div>
    </footer>
  );
}
