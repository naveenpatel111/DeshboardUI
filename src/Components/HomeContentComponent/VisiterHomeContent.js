import React from "react";
import { Link } from "react-router-dom";

function VisitorContent() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* ✅ Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Learn Skills. Build Career. 🚀
            </h1>
            <p className="mt-3 text-indigo-100 text-lg">
              Join our platform and become job-ready with real-world projects.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/register"
                className="bg-white text-indigo-700 px-5 py-2 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-white px-5 py-2 rounded-xl font-bold hover:bg-white hover:text-indigo-700 transition"
              >
                Explore
              </Link>
            </div>
          </div>

          <img
            className="w-full md:w-72 rounded-2xl shadow-lg object-cover"
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=900&auto=format&fit=crop"
            alt="hero"
          />
        </div>
      </section>

      {/* ✅ Stats Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Students", value: "12K+", icon: "🎓" },
            { title: "Courses", value: "200+", icon: "📚" },
            { title: "Mentors", value: "50+", icon: "👨‍🏫" },
            { title: "Placements", value: "5K+", icon: "💼" },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex items-center justify-between"
            >
              <div>
                <p className="text-gray-500 font-semibold">{card.title}</p>
                <h2 className="text-2xl font-extrabold text-gray-800 mt-2">
                  {card.value}
                </h2>
              </div>
              <div className="text-4xl">{card.icon}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-6">
          Why Choose Us ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Live Classes",
              desc: "Interactive sessions with mentors and doubt clearing.",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
            },
            {
              title: "Projects",
              desc: "Real projects for portfolio and practical skills.",
              img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
            },
            {
              title: "Placement Support",
              desc: "Interview prep and resume building support.",
              img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-extrabold text-gray-800">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
                <Link
                  to="/register"
                  className="mt-4 inline-block text-indigo-600 font-bold hover:underline"
                >
                  Join Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default VisitorContent;
