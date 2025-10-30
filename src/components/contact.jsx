import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mldongvj", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("⚠️ Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* 🌟 Heading */}
        <h2 className="text-3xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* 📨 Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
          >
            <label className="font-medium">Name</label>
            <input
              name="name"
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-400 outline-none dark:bg-gray-700 dark:border-gray-600"
              required
              placeholder="Your name"
            />

            <label className="font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-400 outline-none dark:bg-gray-700 dark:border-gray-600"
              required
              placeholder="Your email"
            />

            <label className="font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              className="p-2 border rounded focus:ring-2 focus:ring-indigo-400 outline-none dark:bg-gray-700 dark:border-gray-600"
              placeholder="Your message..."
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`bg-indigo-600 text-white py-2 rounded transition hover:bg-indigo-700 ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* 📷 Right Image */}
          <div className="flex justify-center">
            <img
              src="/contactme.png"
              alt="Contact Illustration"
              className="w-80 md:w-96 drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
