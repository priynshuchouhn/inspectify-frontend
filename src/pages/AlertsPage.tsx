import { useState } from 'react';

const AlertsPage = () => {
  const [result, setResult] = useState('Results will appear here');

  const handleSimpleAlert = () => {
    alert('This is a simple alert');
    setResult('Simple alert was triggered and closed');
  };

  const handleConfirmAlert = () => {
    const confirmed = window.confirm('Do you confirm this action?');
    setResult(`Confirm alert was ${confirmed ? 'accepted' : 'cancelled'}`);
  };

  const handlePromptAlert = () => {
    const userInput = window.prompt('Please enter your name:', 'Default Name');
    if (userInput === null) {
      setResult('Prompt was cancelled');
    } else {
      setResult(`Prompt input: "${userInput}"`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Alerts Demonstration</h1>
      <p className="mb-4 text-gray-600">
        This page demonstrates how to handle different types of JavaScript alerts in Selenium.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Simple Alert */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Simple Alert</h2>
          <p className="text-sm text-gray-600 mb-4">
            A basic alert with an OK button.
          </p>
          <button 
            id="simple-alert" 
            className="btn btn-primary w-full"
            onClick={handleSimpleAlert}
          >
            Show Simple Alert
          </button>
        </div>

        {/* Confirm Alert */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Confirm Alert</h2>
          <p className="text-sm text-gray-600 mb-4">
            An alert with OK and Cancel buttons.
          </p>
          <button 
            id="confirm-alert" 
            className="btn btn-primary w-full"
            onClick={handleConfirmAlert}
          >
            Show Confirm Alert
          </button>
        </div>

        {/* Prompt Alert */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Prompt Alert</h2>
          <p className="text-sm text-gray-600 mb-4">
            An alert that asks for user input.
          </p>
          <button 
            id="prompt-alert" 
            className="btn btn-primary w-full"
            onClick={handlePromptAlert}
          >
            Show Prompt Alert
          </button>
        </div>
      </div>

      {/* Results Display */}
      <div className="card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Alert Results</h2>
        <div id="alert-result" className="p-4 bg-gray-100 rounded">
          {result}
        </div>
      </div>

      {/* Selenium Code Examples */}
      <div className="mt-6 card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Selenium Code Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">Simple Alert Handling:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Click button that triggers alert
driver.findElement(By.id("simple-alert")).click();

// Switch to alert and accept it
Alert alert = driver.switchTo().alert();
alert.accept();`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Confirm Alert Handling:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Click button that triggers confirm
driver.findElement(By.id("confirm-alert")).click();

// Switch to alert and accept or dismiss
Alert confirmAlert = driver.switchTo().alert();
// confirmAlert.accept(); // Click OK
confirmAlert.dismiss(); // Click Cancel`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Prompt Alert Handling:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Click button that triggers prompt
driver.findElement(By.id("prompt-alert")).click();

// Switch to alert, send input, and accept
Alert promptAlert = driver.switchTo().alert();
promptAlert.sendKeys("Selenium Test User");
promptAlert.accept();`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;