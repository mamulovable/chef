import { Authenticated, Unauthenticated, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">ShopMart</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-500 hover:text-gray-900 transition-colors">Home</a>
              <a href="#products" className="text-gray-500 hover:text-gray-900 transition-colors">Products</a>
              <a href="#categories" className="text-gray-500 hover:text-gray-900 transition-colors">Categories</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-900 relative">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <SignOutButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover Amazing Products
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Shop the latest trends and find everything you need in one place. 
                Quality products, great prices, and fast shipping.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                  View Sale
                </button>
              </div>
              
              {/* Auth Section */}
              <div className="max-w-md">
                <Content />
              </div>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">🛍️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find what you're looking for</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary to-blue-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold mb-2">Fashion</h3>
              <p className="text-blue-100">500+ items</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Electronics</h3>
              <p className="text-green-100">300+ items</p>
            </div>
            <div className="bg-gradient-to-br from-accent to-purple-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Home & Garden</h3>
              <p className="text-purple-100">400+ items</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Sports</h3>
              <p className="text-orange-100">200+ items</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Handpicked items just for you</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Product 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Wireless Headphones</h3>
                <p className="text-gray-600 mb-4">Premium quality wireless headphones with noise cancellation.</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">$199</span>
                    <span className="text-lg text-gray-500 line-through ml-2">$249</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span className="text-sm text-gray-500 ml-1">(4.8)</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Product 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Watch</h3>
                <p className="text-gray-600 mb-4">Advanced fitness tracking and smart notifications.</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">$299</span>
                    <span className="text-lg text-gray-500 line-through ml-2">$349</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span className="text-sm text-gray-500 ml-1">(4.9)</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Product 3</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Laptop Stand</h3>
                <p className="text-gray-600 mb-4">Ergonomic aluminum laptop stand for better posture.</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">$89</span>
                    <span className="text-lg text-gray-500 line-through ml-2">$119</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      ★★★★☆
                    </div>
                    <span className="text-sm text-gray-500 ml-1">(4.2)</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Product 4</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bluetooth Speaker</h3>
                <p className="text-gray-600 mb-4">Portable speaker with 360-degree sound and waterproof design.</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-gray-900">$79</span>
                    <span className="text-lg text-gray-500 line-through ml-2">$99</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span className="text-sm text-gray-500 ml-1">(4.7)</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Sale Banner */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Black Friday Sale!</h2>
          <p className="text-xl mb-8">Up to 70% off on selected items. Limited time offer!</p>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold">02</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">14</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">32</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Sale Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Shop With Us?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50. Fast and reliable delivery.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">30-day money-back guarantee on all products.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to help you anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, 
            exclusive deals, and special offers.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
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
              <h3 className="text-lg font-semibold mb-4">ShopMart</h3>
              <p className="text-gray-400">Your one-stop shop for quality products at great prices.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">All Products</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopMart. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

function Content() {
  const loggedInUser = useQuery(api.auth.loggedInUser);

  if (loggedInUser === undefined) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-section">
      <div className="text-center">
        <Authenticated>
          <p className="text-lg text-gray-600 mb-4">
            Welcome back, {loggedInUser?.email ?? "friend"}!
          </p>
          <p className="text-sm text-gray-500">
            Ready to shop and manage your orders.
          </p>
        </Authenticated>
        <Unauthenticated>
          <p className="text-lg text-gray-600 mb-4">Sign in to start shopping</p>
          <p className="text-sm text-gray-500">
            Create your account to access exclusive deals
          </p>
        </Unauthenticated>
      </div>

      <Unauthenticated>
        <SignInForm />
      </Unauthenticated>
    </div>
  );
}