export default function TrustedCompanies() {
  const companies = [
    'Volkswagen',
    'Samsung',
    'Cisco',
    'Vimeo',
    'Procter & Gamble',
    'Hewlett Packard Enterprise',
    'Citi',
    'Ericsson',
    'NetApp',
    'Eventbrite',
  ];

  return (
    <section className="bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Trusted by over 17,000 companies and millions of learners</h2>
          <p className="mt-2 text-sm text-gray-600">Companies of all sizes use our courses to upskill their teams.</p>
        </div>

        <div className="mt-6">
          <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-x-6 gap-y-2 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {companies.map(name => (
              <li key={name} className="text-sm text-gray-700 text-center">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
