import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-6">
      <section className="container mx-auto px-6 lg:px-20">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">RESOURCES</h3>
            <ul>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Learn Buddhism</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Practice Meditation</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Dhamma Articles</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Buddhist Scriptures</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Downloads</a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SERVICES</h3>
            <ul>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Day Visits</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Overnight Visits</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Ordination as a Monk</a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">USEFUL LINKS</h3>
            <ul>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Donate Online</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Contact Info</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="#">Address</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="tel:+ph">Phone: +ph</a>
              </li>
              <li className="mb-2 hover:text-gray-100">
                <a href="mailto:info@domain.com">Email</a>
              </li>
            </ul>
          </div>

          {/* Copyright Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">COPYRIGHT</h3>
            <p className="text-gray-400">
              © 1999 - 2024 Brahma Vihara Meditation Center
            </p>
            <p className="text-gray-400">All Rights Reserved</p>
          </div>
        </div>
      </section>
      <section className=" text-white mt-8 bg-slate-600 flex items-center justify-end space-x-10 py-2 pr-10">
        <p className="text-sm">
          Designed by: <span className="font-semibold">Saikat Barua</span>
        </p>
        <a className="underline" href="http://saikatbarua.com" target="_blank">
          https://saikatbarua.com
        </a>
      </section>
    </footer>
  );
}
