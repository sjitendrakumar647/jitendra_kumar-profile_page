import React from "react"

const Resume = () => {
  // Print handler for React
  const handlePrint = () => window.print()

  return (
    <div className="bg-gray-100 antialiased text-gray-800 print:bg-white">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8 print:p-0">
        {/* Print Button */}
        <div className="text-right mb-6 no-print">
          <button
            // onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Print / Save as PDF
          </button>
        </div>

        {/* Resume Container */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
          <div className="md:flex print:block">
            {/* Left Column (Sidebar) */}
            <aside className="md:w-1/3 bg-gray-50 p-8 print:w-full print:bg-white print:p-6">
              <div className="flex flex-col items-center md:items-start">
                {/* Profile Picture Placeholder */}
                <div className="w-32 h-32 bg-gray-300 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-2xl font-bold">JS</span>
                </div>

                {/* Contact Information */}
                <div className="w-full">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">CONTACT</h2>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      {/* Phone Icon */}
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(+91) 732-787-4702</span>
                    </li>
                    <li className="flex items-center">
                      {/* Email Icon */}
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:sjitendrakumar647@gmail.com" className="hover:text-blue-600 break-all">
                        sjitendrakumar647@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      {/* Location Icon */}
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Bangalore, Karnataka</span>
                    </li>
                    <li className="flex items-center">
                      {/* LinkedIn Icon */}
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.47 1.344h2.94v8.59H3.535v-8.59z" clipRule="evenodd" />
                      </svg>
                      <a href="#" className="hover:text-blue-600">LinkedIn</a>
                    </li>
                    <li className="flex items-center">
                      {/* GitHub Icon */}
                      <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                      </svg>
                      <a href="#" className="hover:text-blue-600">GitHub</a>
                    </li>
                  </ul>
                </div>

                {/* Skills Section */}
                <div className="mt-8 w-full">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">TECHNICAL SKILLS</h2>
                  <ul className="space-y-3 text-sm">
                    <li><strong>Languages:</strong> Java, JavaScript (ES6+), Python</li>
                    <li><strong>Frontend:</strong> React, HTML5, CSS3, Responsive Design</li>
                    <li><strong>Backend:</strong> JDBC, Node.js, Express.js, RESTful APIs</li>
                    <li><strong>Databases:</strong> MongoDB, MySQL, SQL</li>
                    <li><strong>Tools:</strong> Git, GitHub, OOP, Data Structures & Algorithms</li>
                  </ul>
                </div>

                {/* Education Section */}
                <div className="mt-8 w-full">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">EDUCATION</h2>
                  <div className="text-sm mb-4">
                    <h3 className="font-semibold text-base">Master of Computer Applications (MCA)</h3>
                    <p className="text-gray-600">Trident Academy of Technology, Bhubaneswar</p>
                    <p className="text-gray-500">Expected May 2025</p>
                  </div>
                  <div className="text-sm">
                    <h3 className="font-semibold text-base">Bachelor of Science (B.Sc.), Mathematics</h3>
                    <p className="text-gray-600">Godavarish Mahavidyalaya, Banapur</p>
                    <p className="text-gray-500">May 2023</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column (Main Content) */}
            <main className="md:w-2/3 p-8 print:w-full print:p-6">
              {/* Header */}
              <header className="text-center md:text-left mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-blue-600">JITENDRA KUMAR SWAIN</h1>
                <h2 className="text-2xl font-medium text-gray-600 mt-1">Full Stack Java Developer</h2>
              </header>

              {/* Professional Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">PROFESSIONAL SUMMARY</h2>
                <p className="text-gray-700 leading-relaxed">
                  MCA graduate specializing in Full-Stack Java Development with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). Strong foundation in Object-Oriented Programming (OOP), Data Structures, and Algorithms. Experienced in designing, developing, and deploying scalable web applications, including responsive front-end interfaces and secure back-end APIs.
                </p>
              </section>

              {/* Projects */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">PROJECTS</h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-700">Chattrix - Real-Time Chat Application | MERN Stack</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 leading-relaxed">
                    <li>Architected a real-time messaging application supporting instant one-on-one conversations with sub-500ms latency by implementing a WebSockets-based backend.</li>
                    <li>Implemented a scalable Node.js and Express.js server to handle user authentication and message persistence in MongoDB.</li>
                    <li>Built a responsive frontend in React to manage user sessions and render conversations, handling up to 50 concurrent users in testing.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-700">Book Store Management System | MERN Stack</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 leading-relaxed">
                    <li>Engineered a full-stack e-commerce platform with 10+ core functionalities, including user authentication (JWT), and product categorization.</li>
                    <li>Developed a RESTful API using Node.js and Express.js to manage CRUD operations for over 500 book entries in a MongoDB database.</li>
                    <li>Designed a responsive, component-based UI in React that reduced initial load times by 15% through efficient state management.</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-blue-700">Hospital Management System | Java, JDBC, MySQL</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 leading-relaxed">
                    <li>Developed a robust desktop application to streamline hospital operations, reducing data entry time by an estimated 20% through an intuitive UI.</li>
                    <li>Utilized core Java, OOP principles, and JDBC to ensure secure and efficient CRUD operations for patient records and appointments in a MySQL database.</li>
                  </ul>
                </div>
              </section>

              {/* Professional Experience */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-4">PROFESSIONAL EXPERIENCE</h2>

                <div className="mb-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-lg font-semibold text-blue-700">Web & Java Development Intern</h3>
                    <p className="text-sm text-gray-500">Jul 2024 - Sep 2024</p>
                  </div>
                  <h4 className="text-md font-medium text-gray-600">Octanet Services Pvt. Ltd.</h4>
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 leading-relaxed">
                    <li>Implemented 2 core Java applications, applying OOP principles and data structures to solve complex algorithmic problems.</li>
                    <li>Contributed to the development and deployment of 3 responsive web applications using PHP and MySQL.</li>
                    <li>Utilized Git and GitHub for version control and collaboration, participating in code reviews to maintain code quality.</li>
                  </ul>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
