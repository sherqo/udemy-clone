import type { Course } from '../data/courses';
import CourseCard from './CourseCard';

export default function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {courses.map(c => (
        <CourseCard key={c.slug} course={c} />
      ))}
    </div>
  );
}
