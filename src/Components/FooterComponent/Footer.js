import React from "react";

function CommonFooter() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 font-semibold text-sm">
          © {new Date().getFullYear()} Learners. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm font-semibold text-gray-600">
          <span className="hover:text-indigo-600 cursor-pointer transition">
            Privacy Policy
          </span>
          <span className="hover:text-indigo-600 cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-indigo-600 cursor-pointer transition">
            Contact
          </span>
        </div>
      </div>
    </footer>
  );
}

export default CommonFooter;
