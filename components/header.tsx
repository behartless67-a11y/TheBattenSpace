import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center px-8">
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">BATTEN</span>
                <span className="text-xs text-muted-foreground">Digital Commons</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground absolute left-1/2 transform -translate-x-1/2">
          <span>Charlottesville, VA</span>
          <span className="text-foreground font-semibold">77°F</span>
          <span>Mostly cloudy</span>
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="text-sm text-muted-foreground">
            Welcome, <span className="font-medium text-foreground">User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
