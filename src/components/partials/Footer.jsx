import {Logo} from "../";


export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Footer */}
      <div className="max-w-[1100px] mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700">
        {/* Logo and Text */}
        <div>
         <Logo/>
          <p className="text-gray-400 mt-4">
            Your go-to platform for insightful articles and engaging content
            across a variety of topics.
          </p>
        </div>

        {/* Column 1: Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center text-sm px-4">
          <p className="text-gray-400">
            &copy; 2024 MinBlog. All Rights Reserved.
          </p>
          <p className="text-gray-400">Powered by MinBlog</p>
        </div>
      </div>
    </footer>
  );
};
