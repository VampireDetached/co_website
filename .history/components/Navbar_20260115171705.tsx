import Link from "next/link";

const navLinks = [
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Benchmark", href: "/benchmark" },
  { name: "Dataset", href: "/dataset" },
  { name: "Citation", href: "/citation" },
];

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex">
            <Link href="/" className="flex flex-shrink-0 items-center font-bold text-xl text-black no-underline hover:no-underline">
               Co-Website
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
