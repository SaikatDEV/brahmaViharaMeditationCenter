import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-6">
      <section className="container mx-auto px-6 lg:px-20">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <li>
                <Link to="/buddhism" className="mb-2 hover:text-gray-100">
                  Dhamma Articles
                </Link>
              </li>
              <li>
                <Link to="/tripitaka" className="mb-2 hover:text-gray-100">
                  Buddhist Scriptures
                </Link>
              </li>
              <li>
                <Link to="/stories" className="mb-2 hover:text-gray-100">
                  Kids Stories
                </Link>
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
          <div className="lg:col-span-1 sm:col-span-2 text-center lg:text-left">
            <h3 className="text-xl font-bold text-white mb-4">COPYRIGHT</h3>
            <p className="text-gray-400">
              © 1999 - 2024 Brahma Vihara Meditation Center
            </p>
            <p className="text-gray-400">All Rights Reserved</p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="text-white mt-8 bg-slate-600 flex flex-col sm:flex-row items-center justify-center sm:justify-between space-y-4 sm:space-y-0 py-4 px-6 sm:px-10">
        <p className="text-sm text-center sm:text-left">
          Designed by: <span className="font-semibold">Saikat Barua</span>
        </p>
        <a
          className="underline text-sm text-center sm:text-right"
          href="http://saikatbarua.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://saikatbarua.com
        </a>
      </section>
    </footer>
  );
}
