import { useState } from 'react';

const FrameContent1 = () => (
  <div className="p-4 bg-white">
    <h2 className="text-lg font-medium text-indigo-700 mb-3">Frame 1 Content</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="frame1-name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="frame1-name"
          name="frame1-name"
          className="input-field"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="frame1-email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="frame1-email"
          name="frame1-email"
          className="input-field"
          placeholder="Enter your email"
        />
      </div>
      <button type="button" className="btn btn-primary" id="frame1-submit">
        Submit Frame 1
      </button>
    </form>
  </div>
);

const FrameContent2 = () => (
  <div className="p-4 bg-white">
    <h2 className="text-lg font-medium text-green-700 mb-3">Frame 2 Content</h2>
    <form>
      <div className="mb-3">
        <label htmlFor="frame2-subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="frame2-subject"
          name="frame2-subject"
          className="input-field"
          placeholder="Enter subject"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="frame2-message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="frame2-message"
          name="frame2-message"
          rows={3}
          className="input-field"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button type="button" className="btn btn-primary" id="frame2-submit">
        Submit Frame 2
      </button>
    </form>
  </div>
);

const FramesDemoPage = () => {
  const [frame1Srcdoc] = useState(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', sans-serif; margin: 0; }
        .container { padding: 16px; }
        .title { color: #4338ca; font-weight: 600; margin-bottom: 12px; }
        label { display: block; margin-bottom: 4px; font-size: 14px; }
        input { width: 100%; padding: 8px; margin-bottom: 12px; border-radius: 4px; border: 1px solid #d1d5db; }
        button { background-color: #4338ca; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2 class="title">Frame 1 Content</h2>
        <form>
          <div>
            <label for="frame1-name">Name</label>
            <input type="text" id="frame1-name" name="frame1-name" placeholder="Enter your name" />
          </div>
          <div>
            <label for="frame1-email">Email</label>
            <input type="email" id="frame1-email" name="frame1-email" placeholder="Enter your email" />
          </div>
          <button type="button" id="frame1-submit">Submit Frame 1</button>
        </form>
      </div>
    </body>
    </html>
  `);

  const [frame2Srcdoc] = useState(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Inter', sans-serif; margin: 0; }
        .container { padding: 16px; }
        .title { color: #047857; font-weight: 600; margin-bottom: 12px; }
        label { display: block; margin-bottom: 4px; font-size: 14px; }
        input, textarea { width: 100%; padding: 8px; margin-bottom: 12px; border-radius: 4px; border: 1px solid #d1d5db; }
        textarea { resize: vertical; height: 80px; }
        button { background-color: #047857; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2 class="title">Frame 2 Content</h2>
        <form>
          <div>
            <label for="frame2-subject">Subject</label>
            <input type="text" id="frame2-subject" name="frame2-subject" placeholder="Enter subject" />
          </div>
          <div>
            <label for="frame2-message">Message</label>
            <textarea id="frame2-message" name="frame2-message" placeholder="Enter your message"></textarea>
          </div>
          <button type="button" id="frame2-submit">Submit Frame 2</button>
        </form>
      </div>
    </body>
    </html>
  `);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Frames Demonstration</h1>
      <p className="mb-4 text-gray-600">
        This page demonstrates how to work with iframes in Selenium. Selenium needs to switch to the correct frame before interacting with elements inside it.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frame 1 Section */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Frame 1</h2>
          <div className="border rounded-lg overflow-hidden">
            <iframe
              title="Frame 1"
              id="frame1"
              name="frame1"
              srcDoc={frame1Srcdoc}
              className="w-full h-80 border-0"
            ></iframe>
          </div>
        </div>

        {/* Frame 2 Section */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Frame 2</h2>
          <div className="border rounded-lg overflow-hidden">
            <iframe
              title="Frame 2"
              id="frame2"
              name="frame2"
              srcDoc={frame2Srcdoc}
              className="w-full h-80 border-0"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">How to Handle Frames in Selenium</h2>
        <div className="space-y-2">
          <p className="text-gray-600">
            <strong>By ID or Name:</strong> driver.switchTo().frame("frame1");
          </p>
          <p className="text-gray-600">
            <strong>By Index:</strong> driver.switchTo().frame(0); // First frame
          </p>
          <p className="text-gray-600">
            <strong>By WebElement:</strong> WebElement frameElement = driver.findElement(By.id("frame1")); <br />
            driver.switchTo().frame(frameElement);
          </p>
          <p className="text-gray-600">
            <strong>Switch back to main content:</strong> driver.switchTo().defaultContent();
          </p>
        </div>
      </div>
    </div>
  );
};

export default FramesDemoPage;