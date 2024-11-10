// app/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-100  dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-blue-800">Portfolio</Link>
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              <Link href="" className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                Home
              </Link>
              <Link href="./about" className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                About
              </Link>
              <Link href="./contact"className="nav-link text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}