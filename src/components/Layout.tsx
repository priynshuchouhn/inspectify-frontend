import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Target, Layers, Bell, List, FormInput, MousePointer } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { name: 'Login', path: '/', icon: User },
    { name: 'Locator Demo', path: '/locator-demo', icon: Target },
    { name: 'Frames Demo', path: '/frames-demo', icon: Layers },
    { name: 'Alerts', path: '/alerts', icon: Bell },
    { name: 'Dropdowns & Lists', path: '/dropdowns', icon: List },
    { name: 'Form Controls', path: '/form-controls', icon: FormInput },
    { name: 'Action Demo', path: '/action-demo', icon: MousePointer },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-white shadow-lg">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Search className="h-6 w-6 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold text-gray-900">Inspectify</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1" id="navigation-sidebar">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.path;
                  const ItemIcon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      id={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className={isActive ? "nav-link-active" : "nav-link"}
                    >
                      <ItemIcon className="mr-3 h-5 w-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 flex md:hidden ${
          sidebarOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${
            sidebarOpen ? 'opacity-100 ease-out duration-300' : 'opacity-0 ease-in duration-200'
          }`}
          onClick={toggleSidebar}
        ></div>
        
        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white transform transition ${
            sidebarOpen
              ? 'translate-x-0 ease-out duration-300'
              : '-translate-x-full ease-in duration-200'
          }`}
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="flex-shrink-0 flex items-center px-4">
            <Search className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Inspectify</span>
          </div>
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    id={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className={isActive ? "nav-link-active" : "nav-link"}
                    onClick={toggleSidebar}
                  >
                    <ItemIcon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
        
        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden">
          <button
            type="button"
            className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1 flex justify-center px-4">
            <div className="flex items-center">
              <Search className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-lg font-medium text-gray-900">Inspectify</span>
            </div>
          </div>
        </div>
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;