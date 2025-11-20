import Link from 'next/link';

export default function Banner() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Find the right course for you</h1>
            <p className="mt-1 text-sm text-gray-600">Top-rated, hands-on training from industry experts.</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <input
                className="rounded-full border px-3 py-2 text-sm placeholder:text-gray-400"
                placeholder="Search courses..."
                aria-label="Search courses"
              />
            </div>
            <Link href="/courses" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
              Explore courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
