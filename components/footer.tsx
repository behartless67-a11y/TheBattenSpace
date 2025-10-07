import Link from 'next/link';
import { services } from '@/data/services';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const getIcon = (iconName: string): LucideIcon => {
  const iconKey = iconName
    .split('-')
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');

  return (Icons as Record<string, LucideIcon>)[iconKey] || Icons.Box;
};

export function Footer() {
  const quickLinks = services.filter((s) => s.type === 'quick-link');

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link) => {
            const isExternal = link.href.startsWith('http');

            return (
              <Link
                key={link.id}
                href={link.href}
                className="text-sm hover:text-accent transition-colors"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/70 text-center">
          <p>&copy; {new Date().getFullYear()} Frank Batten School of Leadership and Public Policy, University of Virginia</p>
        </div>
      </div>
    </footer>
  );
}
