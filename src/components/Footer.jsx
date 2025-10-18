import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-deepBlue text-white py-12" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">ElectraVote</h3>
            <p className="text-gray-400">Secure and transparent online voting for modern organizations.</p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className_="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/#features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
              <li><Link to="/#testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3" id="footer">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Main Street, Richytown, Ghana</p>
            <p className="text-gray-400">info@electravote.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-800 pt-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} ElectraVote. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
