
// app/about/page.js
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className=" text-lg text-white text-6xl font-bold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-white dark:text-gray-300 mb-6">
                I'm a student of software engineering. I'm a passionate Full Stack Developer with over 1.5 years of experience
                building web applications. I specialize in React , and modern
                web technologies.
              </p>
              <p className="text-lg text-white dark:text-gray-300 mb-6">
                My journey in web development started when I built my first website
                after FSC. Since then, I've worked on numerous projects and
                continuously expanded my skillset.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Skills</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-1">Frontend Development</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Backend Development</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">UI/UX Design</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}