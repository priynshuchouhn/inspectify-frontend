import { useState } from 'react';

const LocatorDemoPage = () => {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Locator Demonstration</h1>
      <p className="mb-4 text-gray-600">This page contains elements that can be located using different Selenium locator strategies.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ID Locators Section */}
        <div className="card" id="id-locators-section">
          <h2 className="text-xl font-medium text-gray-800 mb-4">ID Locators</h2>
          <p className="text-sm text-gray-600 mb-4">Elements with unique IDs are the most reliable to locate.</p>
          
          <button 
            id="unique-id-button" 
            className="btn btn-primary mb-2 w-full"
            onClick={() => setClickedItem('ID Button')}
          >
            Button with ID
          </button>
          
          <div id="result-id-div" className="mt-2 p-3 bg-gray-100 rounded">
            <p id="result-id-text">ID locator result will appear here</p>
          </div>
        </div>

        {/* Class Name Locators Section */}
        <div className="card" id="class-locators-section">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Class Name Locators</h2>
          <p className="text-sm text-gray-600 mb-4">Elements can be located by their CSS class names.</p>
          
          <div className="flex space-x-2 mb-4">
            <button 
              className="btn btn-primary class-locator-button"
              onClick={() => setClickedItem('Class Button 1')}
            >
              Class Button 1
            </button>
            
            <button 
              className="btn btn-secondary class-locator-button"
              onClick={() => setClickedItem('Class Button 2')}
            >
              Class Button 2
            </button>
          </div>
          
          <div className="common-class-div p-3 bg-gray-100 rounded">Common class div 1</div>
          <div className="common-class-div mt-2 p-3 bg-gray-100 rounded">Common class div 2</div>
        </div>

        {/* CSS Selector Locators Section */}
        <div className="card" id="css-locators-section">
          <h2 className="text-xl font-medium text-gray-800 mb-4">CSS Selector Locators</h2>
          <p className="text-sm text-gray-600 mb-4">Elements can be located using CSS selector syntax.</p>
          
          <div className="parent-div p-4 bg-gray-100 rounded">
            <div className="child-div p-2 bg-white rounded border">
              <p className="text-indigo-600">Child element for CSS selector</p>
            </div>
            
            <div className="sibling-div mt-2 p-2 bg-white rounded border">
              <p className="text-green-600">Sibling element</p>
            </div>
          </div>
          
          <input 
            type="text" 
            placeholder="Input with attribute selector" 
            data-test="css-input" 
            className="input-field mt-4" 
          />
        </div>

        {/* XPath Locators Section */}
        <div className="card" id="xpath-locators-section">
          <h2 className="text-xl font-medium text-gray-800 mb-4">XPath Locators</h2>
          <p className="text-sm text-gray-600 mb-4">Elements can be located using XPath expressions.</p>
          
          <div className="nested-structure p-3 bg-gray-100 rounded">
            <div className="level-1">
              <div className="level-2">
                <span className="xpath-target text-red-600">Target with XPath</span>
              </div>
            </div>
          </div>
          
          <table className="w-full mt-4 border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border p-2">Header 1</th>
                <th className="border p-2">Header 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Row 1, Cell 1</td>
                <td className="border p-2">Row 1, Cell 2</td>
              </tr>
              <tr>
                <td className="border p-2">Row 2, Cell 1</td>
                <td className="border p-2 xpath-td">Row 2, Cell 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Results Display */}
      <div className="mt-6 card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Interaction Results</h2>
        <div id="results-panel" className="p-4 bg-gray-100 rounded">
          {clickedItem ? (
            <p>You clicked: {clickedItem}</p>
          ) : (
            <p>Click any interactive element to see results</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocatorDemoPage;