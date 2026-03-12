export default function Booking() {
  return (
    <section id="booking" className="bg-gray-50">
      <div className="py-16 sm:py-24 grid sm:grid-cols-1 lg:grid-cols-2 items-center justify-content-center lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div>
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p>burgerlab@email.com</p>
          <p>+1 234 567 890</p>
          <p>New York, USA</p>
        </div>
        <div>
          <h2 className="text-4xl text-center font-bold mb-12">Book a Table</h2>

          <form className="max-w-xl mx-auto grid gap-6">
            <input placeholder="Name" className="border p-3 rounded" />

            <input placeholder="Phone" className="border p-3 rounded" />

            <input type="date" className="border p-3 rounded" />

            <textarea placeholder="Message" className="border p-3 rounded" />

            <button className="bg-black text-white py-3 rounded">Reserve</button>
          </form>
        </div>
      </div>
    </section>
  );
}
