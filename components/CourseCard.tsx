import Link from 'next/link';
import Image from 'next/image';
import type { Course } from '../data/courses';

export default function CourseCard({ course }: { course: Course }){
  return (
    <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
      <Link href={`/courses/${course.slug}`} className="block">
        <div className="relative mb-3 overflow-hidden rounded-md bg-gray-100" style={{height:140}}>
          {course.image ? (
            <Image src={course.image} alt={course.title} fill className="object-cover" />
          ) : (
            <div className="h-full w-full bg-linear-to-br from-indigo-400 to-rose-500" />
          )}
        </div>
        <h3 className="text-base font-semibold leading-6 text-slate-900">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-600">By {course.author}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-700">⭐ {course.rating}</div>
          <div className="font-semibold">{course.price}</div>
        </div>
      </Link>
    </article>
  )
}
