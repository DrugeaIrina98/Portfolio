import Link from "next/link";

/**
 * Quiet top navigation — a small wordmark and a couple of links. Deliberately
 * understated so it doesn't announce itself before the content does.
 */
export default function Nav() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="font-display text-lg font-medium text-plum transition-opacity duration-300 ease-gentle hover:opacity-70"
        >
          Irina{" "}
          <span className="italic text-plum/70">Drugea</span>
        </Link>
        <div className="flex items-center gap-6 label-mono text-plum/70">
          <Link
            href="/#work"
            className="transition-colors duration-300 ease-gentle hover:text-plum"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="transition-colors duration-300 ease-gentle hover:text-plum"
          >
            About
          </Link>
          <Link
            href="/#say-hi"
            className="transition-colors duration-300 ease-gentle hover:text-plum"
          >
            Say hi
          </Link>
        </div>
      </nav>
    </header>
  );
}
