export function SourceFileLinks({ links }: { links: readonly { label: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <div className="grid gap-2">
      <ul className="grid gap-2 text-sm">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              className="text-action underline wrap-anywhere"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      {links.some(({ href }) => href.includes("?page=")) && (
        <p className="text-xs text-text-tertiary">
          Pages follow the source supplied to this run and may differ from the filing’s printed
          pages.
        </p>
      )}
    </div>
  );
}
