import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceTile as ServiceTileType } from '@/types';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceTileProps {
  service: ServiceTileType;
}

const getIcon = (iconName: string): LucideIcon => {
  const iconKey = iconName
    .split('-')
    .map((word, index) =>
      index === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');

  return (Icons as Record<string, LucideIcon>)[iconKey] || Icons.Box;
};

export function FeaturedServiceTile({ service }: ServiceTileProps) {
  const Icon = service.icon ? getIcon(service.icon) : Icons.Box;

  return (
    <Link href={service.href} className="group">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1 relative overflow-hidden">
        {service.image && (
          <div
            className="absolute inset-0 opacity-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${service.image})` }}
          />
        )}
        <CardHeader className="pb-4 relative z-10">
          <div className="w-16 h-16 mb-4 rounded-xl bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-colors">
            <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
          </div>
          <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
          {service.description && (
            <CardDescription className="text-sm text-muted-foreground">
              {service.description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
}

export function QuickLinkTile({ service }: ServiceTileProps) {
  const Icon = service.icon ? getIcon(service.icon) : Icons.Box;
  const isExternal = service.href.startsWith('http');

  return (
    <Link
      href={service.href}
      className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card/95 backdrop-blur-sm hover:bg-accent/5 hover:border-primary/30 transition-all duration-200"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
      </div>
      <span className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
        {service.title}
      </span>
      {isExternal && (
        <Icons.ExternalLink className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0" />
      )}
    </Link>
  );
}
