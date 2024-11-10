
// app/page.js
import Navbar from './components/Navbar';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from '../public/profile.jpeg';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="hero-section pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            
          <div className="flex justify-center mb-6">
              <img
                src="/profile.jpeg"
                alt="Sadia Saleem"
                width={260}
                height={200}
                className="rounded-full object-cover transition-transform duration-300 hover:scale-105"

              />
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold text-yellow-100 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600">SADIA SALEEM</span>
            </h1>
            <p className="text-xl sm:text-2xl text-yellow-100 dark:text-gray-300 mb-8">
            Software Engineering Student | Full Stack Developer | UI/UX Designer 
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/Sadia871" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaGithub className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/sadia-saleem871/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaFacebook className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Featured Projects */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          
          <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
    Project 1: Resume on WebPage
  </h3>
  <p className="text-gray-600 dark:text-gray-300">
    Tools & Technologies: <span className="font-semibold">HTML, TypeScript, Tailwind CSS</span>
  </p>
  {/* Link Button */}
  <div className="mt-4">
    <a 
      href="https://milestone-resume01-fgka.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors"
    >
      View Project
    </a>
  </div>
</div>

</div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
    Project 2:  Resume Editor
  </h3>
  <p className="text-gray-600 dark:text-gray-300">
    Tools & Technologies: <span className="font-semibold">HTML, Javascript, TypeScript, Tailwind CSS, PDF.js</span>

                <div className="mt-4">
    <a 
      href="https://sadia871-milestone-resume2-3-sadume.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors"
    >
      View Project
    </a>
  </div>
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-400">
    Project 3: Dynamic Resume Builder
  </h3>
  <p className="text-gray-600 dark:text-gray-300">
    Tools & Technologies: <span className="font-semibold">HTML, Javascript, TypeScript, Tailwind CSS, PDF.js</span>

                <div className="mt-4">
    <a 
      href="https://static-resume-builder-sadume-buvz.vercel.app/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-colors"
    >
      View Project
    </a>
  </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}