export default function News() {
  return (
    <section id="news" className="py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold mb-16">Latest News</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 shadow rounded">New Burger Launch</div>

        <div className="p-6 shadow rounded">Weekend Discount</div>

        <div className="p-6 shadow rounded">Chef Special</div>
      </div>
    </section>
  );
}
