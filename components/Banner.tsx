import Image from 'next/image';

export default function Banner() {
  return (
    <section className="relative border-b border-gray-100">
      <div className="relative h-56 sm:h-72 md:h-96 lg:h-[480px]">
        <Image src="/banner.jpg" alt="Banner image" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-xl text-white">
              <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl">Find the right course for you</h1>
              <p className="mt-2 text-sm sm:text-base text-white/90">
                Top-rated, hands-on training from industry experts — learn new skills and grow your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
