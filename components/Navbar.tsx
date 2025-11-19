import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-md bg-rose-600" aria-hidden />
              <span className="font-semibold">Udemy UI</span>
            </Link>
            <nav className="hidden gap-4 md:flex text-sm text-gray-700">
              <Link href="/courses" className="hover:text-black">
                Courses
              </Link>
              <a href="#" className="hover:text-black">
                Categories
              </a>
              <a href="#" className="hover:text-black">
                Deals
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <input
                className="rounded-full border bg-gray-50 px-3 py-1 text-sm placeholder:text-gray-400"
                placeholder="Search for anything"
              />
            </div>
            <Link href="#" className="text-sm text-indigo-600">
              Sign in
            </Link>
            <button className="rounded-full bg-indigo-600 px-3 py-1 text-sm text-white">Join now</button>
          </div>
        </div>
      </div>
    </header>
  );
}
