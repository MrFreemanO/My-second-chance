const tiers = [
  {
    name: 'Basic Refresh',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '€49',
    setupFee: '€499 setup',
    description: 'Perfect for micro-businesses needing a modern, professional online start.',
    features: [
      'Single-page website',
      'Modern, responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      'Hosting & .nl domain included',
      'Automated security updates',
      'Monthly automated backups',
    ],
    featured: false,
  },
  {
    name: 'Standard Boost',
    id: 'tier-standard',
    href: '#',
    priceMonthly: '€79',
    setupFee: '€899 setup',
    description: 'Optimal for growing businesses looking to enhance their digital presence and engagement.',
    features: [
      'Up to 5 pages',
      'Premium responsive design',
      'Advanced SEO optimization',
      'Social media integration',
      'Basic booking system integration',
      'Hosting & .nl domain included',
      'Automated security & backups',
      'Basic analytics reporting',
    ],
    featured: true,
  },
  {
    name: 'Premium Automation',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '€129',
    setupFee: '€1499 setup',
    description: 'Comprehensive solution for businesses aiming for maximum automation and online impact.',
    features: [
      'Up to 10 pages',
      'Custom, unique design',
      'Full SEO strategy & optimization',
      'CRM/CMS integration options',
      'Full booking/e-commerce system integration',
      'Hosting & .nl domain included',
      'Advanced automated security & backups',
      'Detailed analytics & automated monthly reports',
      'Priority support',
    ],
    featured: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-gray-900 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-blue-400">Pricing & Packages</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Automated Website Solutions for Every Business
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose the perfect plan to refresh your online presence and start building passive income. All our packages focus on automation and long-term value.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={[
                tier.featured ? 'lg:z-10 lg:rounded-b-none shadow-blue-500/50' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-gray-800 p-8 ring-1 ring-gray-700 xl:p-10 hover:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105'
              ].join(" ")}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h2 id={tier.id} className={`text-lg font-semibold leading-8 ${tier.featured ? "text-blue-400" : "text-white"}`}>
                    {tier.name}
                  </h2>
                  {tier.featured ? (
                    <p className="rounded-full bg-blue-500/30 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-400">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-400">{tier.setupFee}</p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg className="h-6 w-5 flex-none text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={[
                  tier.featured
                    ? 'bg-blue-500 text-white shadow-sm hover:bg-blue-400 focus-visible:outline-blue-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                ].join(" ")}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

