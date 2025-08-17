import React from 'react';
import { FaFacebookF, FaWhatsapp, FaTiktok, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 page">
      <div className="max-w-md w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center card">
        <div className="flex flex-col items-center">
          <img
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5fa74d28dbd5abd56a89f1bff114bf9b~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=ed66a334&x-expires=1755561600&x-signature=oVaaNAv0QvdycBlKL%2BTr7adtSG0%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=maliva"
            alt="perfil"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md avatar"
          />

          <h1 className="mt-4 text-2xl font-semibold text-gray-900">hola, soy Bryan</h1>
          <p className="mt-2 text-gray-600 subtitle">Contenido sobre programación</p>

          <div className="mt-4 flex gap-4 justify-center socials">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-3 rounded-full bg-blue-50 text-blue-600 hover:scale-105 transition">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" aria-label="Whatsapp" className="p-3 rounded-full bg-green-50 text-green-600 hover:scale-105 transition">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="Tiktok" className="p-3 rounded-full bg-pink-50 text-pink-600 hover:scale-105 transition">
              <FaTiktok />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-full bg-sky-50 text-sky-600 hover:scale-105 transition">
              <FaLinkedinIn />
            </a>
          </div>

          <nav className="mt-6">
            <Link to="/recursos" className="menu-link btn" aria-label="Recursos">Recursos</Link>
          </nav>

          <p className="cta text-sm text-gray-700">No te olvides de seguirme y dar like para mas contenido</p>
        </div>
      </div>
    </div>
  );
}
