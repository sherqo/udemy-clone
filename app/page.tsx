import CourseGrid from '../components/CourseGrid';
import { courses } from '../data/courses';

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <main className="mx-auto max-w-7xl py-12 px-6">
        <section className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Find the right course for you</h1>
            <p className="text-gray-600">Top rated, hands-on training from industry experts.</p>
          </div>
          <div className="hidden sm:block">
            <input className="rounded-full border px-3 py-2" placeholder="Search courses..." />
          </div>
        </section>
        <section className="mb-6">
          <CourseGrid courses={courses} />
        </section>{' '}
      </main>
    </div>
  );
}
