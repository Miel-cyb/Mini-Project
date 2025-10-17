import React from 'react'
import ContactSection from './Contact';

const Footer = () => {
    const today = new Date().getFullYear();
  return (
    <>
       <hr className="border-gray-600" />
    <footer id="footer" className="bg-deepBlue text-white py-8">
     
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                    <p className="text-lg font-semibold">Campus Voting Platform</p>
                    <p className="mt-2 text-sm text-gray-300">Empowering your voice in campus elections.</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-8">
                        <li>
                            <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
                        </li>
                        <li>
                            <div>
                                <a href="#" className="text-sm hover:text-gray-400">Contact Us: </a>
                                <p className="text-xs text-gray-400 mt-1">📧 support@campusvote.com</p>
                                <p className="text-xs text-gray-400">📞 +233 50 123 4567</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-6 text-sm text-gray-400">
                <p>&copy; {today} Campus Voting Platform. <br /> All rights reserved.</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
