// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/thimothee-ranvin-a946372a0/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/rthimoth" target="_blank" rel="noopener noreferrer" className="hover:underline">
          GitHub
        </a>
      </div>
      <div className="mt-2">
        <p>Email : <a href="mailto:your.email@example.com" className="hover:underline">thimothee.ranvin@hotmail.com</a></p>
        <p>Tel : <a href="tel:+1234567890" className="hover:underline">06.25.11.75.85</a></p>
      </div>
      <div className="mt-2">
        © {new Date().getFullYear()} Ranvin. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
