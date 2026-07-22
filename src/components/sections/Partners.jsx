const partners = ['Google', 'Microsoft', 'Amazon', 'Deloitte', 'Zomato', 'Flipkart']

export default function Partners() {
  const doubled = [...partners, ...partners]

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
      <p className="mb-6 text-center text-sm font-medium text-ink/45">Our trusted partners</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max gap-16">
          {doubled.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-xl font-bold text-ink/25"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
