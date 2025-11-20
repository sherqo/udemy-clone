import CourseGrid from '../components/CourseGrid';
import TrustedCompanies from '../components/TrustedCompanies';
import Banner from '../components/Banner';
import FeatureImageRight from '../components/FeatureImageRight';
import { courses } from '../data/courses';

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <Banner />
      <FeatureImageRight />
      <main className="mx-auto max-w-7xl py-12 px-6">
        <section className="mb-6">
          <CourseGrid courses={courses} />
        </section>
        <TrustedCompanies />
      </main>
    </div>
  );
}
