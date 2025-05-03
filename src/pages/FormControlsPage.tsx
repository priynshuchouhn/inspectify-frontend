import { useState } from 'react';

const FormControlsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    age: '',
    subscription: false,
    interests: {
      sports: false,
      reading: false,
      music: false,
      travel: false
    },
    comments: ''
  });
  
  const [formResult, setFormResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    if (name === 'sports' || name === 'reading' || name === 'music' || name === 'travel') {
      setFormData({
        ...formData,
        interests: {
          ...formData.interests,
          [name]: value as boolean
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      age: '',
      subscription: false,
      interests: {
        sports: false,
        reading: false,
        music: false,
        travel: false
      },
      comments: ''
    });
    setFormResult(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.gender) {
      setFormResult('Please fill in all required fields.');
      return;
    }
    
    // Convert the form data to a string representation for display
    const selectedInterests = Object.entries(formData.interests)
      .filter(([_, selected]) => selected)
      .map(([interest, _]) => interest);
    
    const formDataString = `
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Gender: ${formData.gender}
      Age: ${formData.age || 'Not specified'}
      Newsletter: ${formData.subscription ? 'Yes' : 'No'}
      Interests: ${selectedInterests.length > 0 ? selectedInterests.join(', ') : 'None selected'}
      Comments: ${formData.comments || 'No comments'}
    `;
    
    setFormResult(formDataString);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Form Controls Demonstration</h1>
      <p className="mb-4 text-gray-600">
        This page demonstrates how to work with various form controls in Selenium, including text inputs, radio buttons, checkboxes, and command buttons.
      </p>
      
      <div className="card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">User Registration Form</h2>
        
        <form id="registration-form" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Text inputs */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="input-field"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="input-field"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="input-field"
                min="1" 
                max="120"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
          </div>
          
          {/* Radio buttons for gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor="gender-male" className="ml-2 text-sm text-gray-700">
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor="gender-female" className="ml-2 text-sm text-gray-700">
                  Female
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="gender-other"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor="gender-other" className="ml-2 text-sm text-gray-700">
                  Other
                </label>
              </div>
            </div>
          </div>
          
          {/* Checkbox for subscription */}
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscription"
                name="subscription"
                checked={formData.subscription}
                onChange={handleChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="subscription" className="ml-2 text-sm text-gray-700">
                Subscribe to newsletter
              </label>
            </div>
          </div>
          
          {/* Checkboxes for interests */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interests
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-sports"
                  name="sports"
                  checked={formData.interests.sports}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="interest-sports" className="ml-2 text-sm text-gray-700">
                  Sports
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-reading"
                  name="reading"
                  checked={formData.interests.reading}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="interest-reading" className="ml-2 text-sm text-gray-700">
                  Reading
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-music"
                  name="music"
                  checked={formData.interests.music}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="interest-music" className="ml-2 text-sm text-gray-700">
                  Music
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="interest-travel"
                  name="travel"
                  checked={formData.interests.travel}
                  onChange={handleChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="interest-travel" className="ml-2 text-sm text-gray-700">
                  Travel
                </label>
              </div>
            </div>
          </div>
          
          {/* Textarea for comments */}
          <div className="mb-6">
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={3}
              className="input-field"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Enter any comments here"
            ></textarea>
          </div>
          
          {/* Command buttons */}
          <div className="flex space-x-4">
            <button type="submit" id="submit-button" className="btn btn-primary">
              Submit
            </button>
            <button 
              type="button" 
              id="reset-button" 
              className="btn btn-secondary"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      {/* Form Results */}
      {formResult && (
        <div className="mt-6 card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Form Results</h2>
          <div id="form-results" className="p-4 bg-gray-100 rounded whitespace-pre-wrap">
            {formResult}
          </div>
        </div>
      )}

      {/* Selenium Code Examples */}
      <div className="mt-6 card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Selenium Code Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">Text Input Handling:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Find and interact with text inputs
WebElement firstName = driver.findElement(By.id("firstName"));
firstName.sendKeys("John");

WebElement email = driver.findElement(By.id("email"));
email.clear(); // Clear existing text
email.sendKeys("john@example.com");`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Radio Button Handling:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Select a radio button
WebElement maleRadio = driver.findElement(By.id("gender-male"));
maleRadio.click();

// Check if a radio button is selected
boolean isSelected = maleRadio.isSelected();`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Checkbox Handling:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Toggle checkboxes
WebElement subscription = driver.findElement(By.id("subscription"));
if (!subscription.isSelected()) {
    subscription.click();
}

WebElement sportsCheckbox = driver.findElement(By.id("interest-sports"));
sportsCheckbox.click(); // Check
sportsCheckbox.click(); // Uncheck`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Form Submission:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Method 1: Click submit button
WebElement submitButton = driver.findElement(By.id("submit-button"));
submitButton.click();

// Method 2: Submit the form directly
WebElement form = driver.findElement(By.id("registration-form"));
form.submit();`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormControlsPage;