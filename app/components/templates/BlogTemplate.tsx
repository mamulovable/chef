import React from 'react';

// Blog Template Component
export function BlogTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">TechBlog</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-500 hover:text-gray-900">Home</a>
              <a href="#categories" className="text-gray-500 hover:text-gray-900">Categories</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#contact" className="text-gray-500 hover:text-gray-900">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tech Insights & Innovation
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest trends in technology, programming, and digital innovation. 
            Expert insights, tutorials, and industry analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Read Latest Posts
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Browse Categories
            </button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">Featured Image</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Technology</span>
                  <span className="text-gray-500 ml-4">Dec 15, 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  The Future of Web Development: Trends to Watch in 2025
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore the emerging technologies and frameworks that are shaping the future of web development. 
                  From AI-powered development tools to new JavaScript frameworks, discover what's coming next.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">JD</span>
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-semibold text-gray-900">John Doe</div>
                      <div className="text-sm text-gray-500">Tech Writer</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Posts</h2>
            <p className="text-xl text-gray-600">Fresh content delivered regularly</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">React Tutorial</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">Tutorial</span>
                  <span className="text-gray-500 ml-3 text-sm">Dec 12, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Building Modern React Applications
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to build scalable React applications with modern tools and best practices.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">JD</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">John Doe</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    Read →
                  </button>
                </div>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">AI & ML</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">AI</span>
                  <span className="text-gray-500 ml-3 text-sm">Dec 10, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Machine Learning in Production
                </h3>
                <p className="text-gray-600 mb-4">
                  Best practices for deploying and maintaining machine learning models in production environments.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">JD</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">John Doe</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    Read →
                  </button>
                </div>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">DevOps</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-semibold">DevOps</span>
                  <span className="text-gray-500 ml-3 text-sm">Dec 8, 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Docker & Kubernetes Guide
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete guide to containerization and orchestration with Docker and Kubernetes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">JD</span>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">John Doe</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                    Read →
                  </button>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find content that interests you</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-blue-100">24 articles</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
              <p className="text-green-100">18 articles</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p className="text-purple-100">15 articles</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-orange-100">12 articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights delivered straight to your inbox. 
            No spam, just quality content.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">TechBlog</h3>
              <p className="text-gray-400">Your source for the latest in technology, programming, and digital innovation.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Programming</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">AI & ML</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">DevOps</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechBlog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
