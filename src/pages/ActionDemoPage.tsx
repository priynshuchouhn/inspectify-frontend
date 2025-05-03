import { useState, useRef, useEffect } from 'react';

const ActionDemoPage = () => {
  const [dragStatus, setDragStatus] = useState('Drag the box and drop it in the target area');
  const [clickStatus, setClickStatus] = useState('Double-click the button');
  const [menuStatus, setMenuStatus] = useState('Hover over the menu button');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for the draggable element and drop target
  const draggableRef = useRef<HTMLDivElement>(null);
  const dropTargetRef = useRef<HTMLDivElement>(null);

  // Set up drag and drop
  useEffect(() => {
    const draggable = draggableRef.current;
    const dropTarget = dropTargetRef.current;
    
    if (!draggable || !dropTarget) return;
    
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      target.style.opacity = '0.4';
      
      // Set dataTransfer data for Firefox compatibility
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', 'draggable-box');
      }
      
      setDragStatus('Dragging...');
    };
    
    const handleDragEnd = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      target.style.opacity = '1';
    };
    
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = 'move';
      }
      
      return false;
    };
    
    const handleDragEnter = () => {
      dropTarget.classList.add('bg-green-100');
      dropTarget.classList.remove('bg-gray-100');
    };
    
    const handleDragLeave = () => {
      dropTarget.classList.remove('bg-green-100');
      dropTarget.classList.add('bg-gray-100');
    };
    
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      
      dropTarget.classList.remove('bg-green-100');
      dropTarget.classList.add('bg-green-200');
      
      setDragStatus('Dropped successfully!');
      
      // Reset after 2 seconds
      setTimeout(() => {
        dropTarget.classList.remove('bg-green-200');
        dropTarget.classList.add('bg-gray-100');
        setDragStatus('Drag the box and drop it in the target area');
      }, 2000);
      
      return false;
    };
    
    draggable.addEventListener('dragstart', handleDragStart);
    draggable.addEventListener('dragend', handleDragEnd);
    
    dropTarget.addEventListener('dragover', handleDragOver);
    dropTarget.addEventListener('dragenter', handleDragEnter);
    dropTarget.addEventListener('dragleave', handleDragLeave);
    dropTarget.addEventListener('drop', handleDrop);
    
    return () => {
      draggable.removeEventListener('dragstart', handleDragStart);
      draggable.removeEventListener('dragend', handleDragEnd);
      
      dropTarget.removeEventListener('dragover', handleDragOver);
      dropTarget.removeEventListener('dragenter', handleDragEnter);
      dropTarget.removeEventListener('dragleave', handleDragLeave);
      dropTarget.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleDoubleClick = () => {
    setClickStatus('Double-clicked!');
    
    setTimeout(() => {
      setClickStatus('Double-click the button');
    }, 2000);
  };

  const handleMenuHover = () => {
    setIsMenuOpen(true);
    setMenuStatus('Menu opened on hover');
  };

  const handleMenuLeave = () => {
    setIsMenuOpen(false);
    setMenuStatus('Hover over the menu button');
  };

  const handleMenuItemClick = (item: string) => {
    setMenuStatus(`Selected: ${item}`);
    setIsMenuOpen(false);
    
    setTimeout(() => {
      setMenuStatus('Hover over the menu button');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Action Class Demonstration</h1>
      <p className="mb-4 text-gray-600">
        This page demonstrates how to work with advanced interactions in Selenium using the Actions class.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Drag and Drop Section */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Drag and Drop</h2>
          <p className="text-sm text-gray-600 mb-4">
            Drag the colored box and drop it in the target area.
          </p>
          
          <div className="flex flex-col space-y-4">
            <div 
              ref={draggableRef}
              id="draggable-box"
              draggable="true"
              className="w-24 h-24 bg-indigo-500 rounded cursor-move flex items-center justify-center text-white font-medium"
            >
              Drag me
            </div>
            
            <div 
              ref={dropTargetRef}
              id="drop-target"
              className="w-full h-32 bg-gray-100 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-gray-600"
            >
              Drop here
            </div>
            
            <div id="drag-status" className="text-center text-sm font-medium">
              {dragStatus}
            </div>
          </div>
        </div>

        {/* Double Click Section */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Double Click</h2>
          <p className="text-sm text-gray-600 mb-4">
            Double-click the button below to trigger an action.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <button 
              id="double-click-button"
              className="btn btn-primary px-6 py-3"
              onDoubleClick={handleDoubleClick}
            >
              Double Click Me
            </button>
            
            <div id="double-click-status" className="text-center text-sm font-medium mt-4">
              {clickStatus}
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Menu Section */}
      <div className="card mb-6">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Hover Menu</h2>
        <p className="text-sm text-gray-600 mb-4">
          Hover over the button to show a dropdown menu.
        </p>
        
        <div className="flex flex-col items-center">
          <div className="relative inline-block">
            <button 
              id="hover-menu-button"
              className="btn btn-primary"
              onMouseEnter={handleMenuHover}
              onMouseLeave={handleMenuLeave}
            >
              Hover For Menu
            </button>
            
            {isMenuOpen && (
              <div 
                id="dropdown-menu"
                className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                onMouseEnter={handleMenuHover}
                onMouseLeave={handleMenuLeave}
              >
                <a 
                  id="menu-item-1"
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={(e) => { e.preventDefault(); handleMenuItemClick('Option 1'); }}
                >
                  Option 1
                </a>
                <a 
                  id="menu-item-2"
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={(e) => { e.preventDefault(); handleMenuItemClick('Option 2'); }}
                >
                  Option 2
                </a>
                <a 
                  id="menu-item-3"
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={(e) => { e.preventDefault(); handleMenuItemClick('Option 3'); }}
                >
                  Option 3
                </a>
              </div>
            )}
          </div>
          
          <div id="hover-status" className="text-center text-sm font-medium mt-4">
            {menuStatus}
          </div>
        </div>
      </div>

      {/* Selenium Code Examples */}
      <div className="card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Selenium Code Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">Drag and Drop:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Initialize Actions class
Actions actions = new Actions(driver);

// Find elements
WebElement source = driver.findElement(By.id("draggable-box"));
WebElement target = driver.findElement(By.id("drop-target"));

// Perform drag and drop
actions.dragAndDrop(source, target).perform();

// Alternative approach
actions.clickAndHold(source)
       .moveToElement(target)
       .release()
       .perform();`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Double Click:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Find button element
WebElement button = driver.findElement(By.id("double-click-button"));

// Perform double click
Actions actions = new Actions(driver);
actions.doubleClick(button).perform();`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Hover Interaction:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Find menu button
WebElement menuButton = driver.findElement(By.id("hover-menu-button"));

// Hover over the button to show menu
Actions actions = new Actions(driver);
actions.moveToElement(menuButton).perform();

// Wait for menu to appear and click an item
WebElement menuItem = driver.findElement(By.id("menu-item-2"));
menuItem.click();`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionDemoPage;