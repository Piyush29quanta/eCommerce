import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-50 border-t border-gray-200 mt-40">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        
        {/* Left Section */}
        <div className="md:col-span-2">
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="text-gray-600 leading-relaxed">
            Discover top products at great prices. Shop confidently and enjoy fast delivery.
            <br />Free returns within 30 days for eligible items.
            <br />Secure payments and 24/7 customer support to help when you need it.
            <br />Sign up for exclusive deals and early access to new arrivals.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Email: support@example.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-gray-500 text-xs border-t border-gray-200 py-4">
        © {new Date().getFullYear()} YourStore. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
