import React from 'react';
import { ExternalLink, BookOpen, Video, Code, Globe, Users } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      category: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "MDN Web Docs - JavaScript",
          description: "The most comprehensive JavaScript documentation and tutorials",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          type: "Official Documentation"
        },
        {
          title: "JavaScript.info",
          description: "Modern JavaScript tutorial with detailed explanations",
          url: "https://javascript.info/",
          type: "Tutorial"
        },
        {
          title: "ECMAScript Specification",
          description: "The official JavaScript language specification",
          url: "https://tc39.es/ecma262/",
          type: "Specification"
        }
      ]
    },
    {
      category: "Interactive Learning",
      icon: Code,
      items: [
        {
          title: "freeCodeCamp",
          description: "Free coding bootcamp with JavaScript certification",
          url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/",
          type: "Course"
        },
        {
          title: "Codecademy JavaScript",
          description: "Interactive JavaScript lessons and projects",
          url: "https://www.codecademy.com/learn/introduction-to-javascript",
          type: "Interactive Course"
        },
        {
          title: "JavaScript30",
          description: "30 Day Vanilla JS Challenge by Wes Bos",
          url: "https://javascript30.com/",
          type: "Challenge Series"
        }
      ]
    },
    {
      category: "Video Tutorials",
      icon: Video,
      items: [
        {
          title: "JavaScript Crash Course - Traversy Media",
          description: "Complete JavaScript fundamentals in one video",
          url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
          type: "YouTube"
        },
        {
          title: "The Complete JavaScript Course - Jonas Schmedtmann",
          description: "Comprehensive JavaScript course from zero to expert",
          url: "https://www.udemy.com/course/the-complete-javascript-course/",
          type: "Udemy Course"
        },
        {
          title: "JavaScript - The Good Parts",
          description: "Douglas Crockford's classic presentation on JavaScript",
          url: "https://www.youtube.com/watch?v=hQVTIJBZook",
          type: "Conference Talk"
        }
      ]
    },
    {
      category: "Practice Platforms",
      icon: Globe,
      items: [
        {
          title: "LeetCode",
          description: "Algorithm and data structure problems",
          url: "https://leetcode.com/",
          type: "Coding Platform"
        },
        {
          title: "HackerRank",
          description: "Programming challenges and skill assessments",
          url: "https://www.hackerrank.com/domains/algorithms",
          type: "Coding Platform"
        },
        {
          title: "Codewars",
          description: "Coding challenges ranked by difficulty",
          url: "https://www.codewars.com/",
          type: "Coding Platform"
        }
      ]
    },
    {
      category: "Community",
      icon: Users,
      items: [
        {
          title: "Stack Overflow",
          description: "Get help with JavaScript problems and errors",
          url: "https://stackoverflow.com/questions/tagged/javascript",
          type: "Q&A Community"
        },
        {
          title: "r/javascript",
          description: "JavaScript community on Reddit",
          url: "https://www.reddit.com/r/javascript/",
          type: "Reddit Community"
        },
        {
          title: "JavaScript Weekly",
          description: "Weekly newsletter with JavaScript news and articles",
          url: "https://javascriptweekly.com/",
          type: "Newsletter"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Learning Resources
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expand your JavaScript knowledge with these carefully curated resources. 
          From beginner tutorials to advanced concepts, we've got you covered.
        </p>
      </div>

      {/* Resources Grid */}
      <div className="space-y-12">
        {resources.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <a
                    key={itemIndex}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1" />
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {item.type}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Tips */}
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Learning Tips 💡
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Practice Regularly</h3>
            <p className="text-gray-600 text-sm">
              Consistency is key. Try to code a little bit every day, even if it's just for 15-30 minutes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Build Projects</h3>
            <p className="text-gray-600 text-sm">
              Apply what you learn by building real projects. Start small and gradually take on more complex challenges.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Read Others' Code</h3>
            <p className="text-gray-600 text-sm">
              Study open-source projects on GitHub to see how experienced developers structure their code.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Join Communities</h3>
            <p className="text-gray-600 text-sm">
              Connect with other learners and experienced developers. Don't hesitate to ask questions and share your progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;