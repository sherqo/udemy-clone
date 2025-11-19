import Image from 'next/image';
import { courses } from '../../../data/courses';

const course = courses.find(c => c.slug === 'complete-react-developer')!;

export default function CompleteReact() {
  if (!course) return <div className="p-8">Course not found</div>;

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="relative mb-4 overflow-hidden rounded-md bg-gray-100" style={{ height: 360 }}>
            {course.image && <Image src={course.image} alt={course.title} fill className="object-cover" />}
          </div>
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="text-sm text-gray-600">
            By {course.author} • ⭐ {course.rating}
          </p>
          <section className="mt-6">
            <h3 className="font-semibold">What you&apos;ll learn</h3>
            <p className="mt-2 text-gray-700">{course.description}</p>
          </section>
        </div>
        <aside className="rounded-md border border-gray-100 p-4 shadow-sm">
          <div className="text-sm">{course.price}</div>
          <button className="mt-4 w-full rounded bg-indigo-600 px-4 py-2 text-white">Buy now</button>
        </aside>
      </div>
    </div>
  );
}
