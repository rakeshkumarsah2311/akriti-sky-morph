"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-10">
      {/* Top section: Placeholder for future content */}
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* You can add content here later */}
      </div>

      {/* Bottom section: Address and Social Icons */}
      <div className="container max-w-7xl flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
        {/* Address */}
        <div>
          <h5 className="text-orange text-xl">📍 India</h5>
          <div className="text-sm pl-3 mt-3 leading-6">
            <p>
              101 - Narendra Nagar- III <br />
              Nagpur <br />
              Maharashtra, Pin - 440015 <br />
              <Link className="hover:text-orange" href="tel:+917083358349">
                (+91) 7083358349
              </Link>
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <Link href="#">
            <Image
              src="/Instagram.jpg"
              alt="Instagram"
              width={40}
              height={40}
              className="rounded-full hover:opacity-80"
            />
          </Link>
          <Link href="#">
            <Image
              src="/gmail.jpg"
              alt="Email"
              width={40}
              height={40}
              className="rounded-full hover:opacity-80"
            />
          </Link>
          <Link href="#">
            <Image
              src="/Linkedln.jpg"
              alt="LinkedIn"
              width={40}
              height={40}
              className="rounded-full hover:opacity-80"
            />
          </Link>
          <Link href="#">
            <Image
              src="/watsapp.jpg"
              alt="WhatsApp"
              width={40}
              height={40}
              className="rounded-full hover:opacity-80"
            />
          </Link>
          <Link href="#">
            <Image
              src="/facebook.jpg"
              alt="Facebook"
              width={40}
              height={40}
              className="rounded-full hover:opacity-80"
            />
          </Link>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <p className="text-center text-sm text-white mt-10">
        &copy; 2025 All rights reserved. Akriti Sky Morph, LLC
      </p>
    </footer>
  );
};

export default Footer;
