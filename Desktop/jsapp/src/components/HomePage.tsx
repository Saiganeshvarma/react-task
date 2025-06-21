import React from 'react';
import { Code, Zap, Trophy, BookOpen, ArrowRight, Star } from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6">
              <Star className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Master JavaScript Through Practice</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Learn JavaScript
              </span>
              <br />
              <span className="text-gray-800">Through Challenges</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Master JavaScript fundamentals with 25 interactive coding challenges. 
              Write code, see results instantly, and track your progress as you build real programming skills.
            </p>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-200 to-orange-100 px-4 py-2 rounded-full shadow-md">
                <Trophy className="h-5 w-5 text-yellow-600" />
                <span className="text-base font-semibold text-yellow-800">Complete all 25 questions and earn a beautiful certificate!</span>
              </div>
            </div>
            
            <button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
            >
              <span>Start Learning</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've designed the perfect learning experience for JavaScript beginners and intermediate developers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Interactive Code Editor</h3>
              <p className="text-gray-600 leading-relaxed">
                Write and execute JavaScript code in real-time with our built-in editor. See your results instantly and learn by doing.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Instant Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Get immediate results from your code execution. Learn from your mistakes and iterate quickly to master concepts.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your learning journey with our progress tracker. Mark challenges as complete and see how far you've come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              25 Carefully Crafted Challenges
            </h2>
            <p className="text-lg text-gray-600">
              From basic "Hello World" to advanced array operations - we've got you covered.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              "Print Hello World",
              "Calculate Triangle Area", 
              "Check Prime Numbers",
              "Reverse Strings",
              "Array Manipulations",
              "Object Operations"
            ].map((challenge, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">{challenge}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm border border-blue-200 hover:border-blue-300"
          >
            View All Challenges
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;