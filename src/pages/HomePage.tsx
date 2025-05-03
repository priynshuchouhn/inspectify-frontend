import { Home, Target, Layers, Bell, List, FormInput, MousePointer } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'Locator Demo',
    description: 'Learn different ways to locate elements using Selenium',
    icon: Target,
    path: '/locator-demo',
    color: 'bg-blue-500'
  },
  {
    name: 'Frames Demo',
    description: 'Practice handling iframes and nested content',
    icon: Layers,
    path: '/frames-demo',
    color: 'bg-purple-500'
  },
  {
    name: 'Alerts',
    description: 'Handle different types of browser alerts',
    icon: Bell,
    path: '/alerts',
    color: 'bg-red-500'
  },
  {
    name: 'Dropdowns & Lists',
    description: 'Work with various dropdown menus and list boxes',
    icon: List,
    path: '/dropdowns',
    color: 'bg-green-500'
  },
  {
    name: 'Form Controls',
    description: 'Interact with different form elements',
    icon: FormInput,
    path: '/form-controls',
    color: 'bg-yellow-500'
  },
  {
    name: 'Action Demo',
    description: 'Practice advanced user interactions',
    icon: MousePointer,
    path: '/action-demo',
    color: 'bg-pink-500'
  }
];

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Home className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Inspectify</h1>
        <p className="text-xl text-gray-600">
          Your playground for mastering Selenium test automation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.name}
            to={feature.path}
            className="group block"
          >
            <div className="h-full card hover:shadow-xl transition-shadow duration-300">
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                {feature.name}
              </h2>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 card bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Testing?</h2>
          <p className="mb-6">
            Explore our interactive examples and practice your Selenium automation skills
          </p>
          <Link
            to="/locator-demo"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Start with Locators
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;