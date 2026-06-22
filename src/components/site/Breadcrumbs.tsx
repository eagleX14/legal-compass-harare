import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { label: string; to?: string; params?: Record<string, string> }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
        <li className="flex items-center">
          <Link to="/" className="flex items-center gap-1 hover:text-navy-deep">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" />
            {it.to ? (
              <Link
                to={it.to}
                params={it.params as never}
                className="hover:text-navy-deep"
              >
                {it.label}
              </Link>
            ) : (
              <span className="text-navy-deep">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
