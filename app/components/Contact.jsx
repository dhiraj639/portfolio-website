"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl font-bold mb-8">Contact Me</h2>

      <form className="flex flex-col gap-6 w-[400px]">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-xl bg-gray-900"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-xl bg-gray-900"
        />

        <textarea
          placeholder="Your Message"
          className="p-4 rounded-xl bg-gray-900 h-40"
        />

        <button className="bg-white text-black p-4 rounded-xl font-bold hover:scale-105 transition">
          Send
        </button>
      </form>
    </section>
  );
}