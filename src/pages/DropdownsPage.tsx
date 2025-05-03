import { useState } from 'react';

const countries = [
  'United States', 'Canada', 'Mexico', 'Brazil', 'United Kingdom', 
  'France', 'Germany', 'Italy', 'Spain', 'China', 'Japan', 'India',
  'Australia', 'New Zealand', 'South Africa'
];

const skills = [
  'JavaScript', 'Python', 'Java', 'C#', 'C++', 'Ruby', 'PHP', 'Swift',
  'SQL', 'HTML', 'CSS', 'React', 'Angular', 'Vue', 'Node.js',
  'TypeScript', 'Docker', 'AWS', 'Azure', 'Git'
];

const DropdownsPage = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectionResults, setSelectionResults] = useState<{country: string, skills: string[]}>({
    country: '',
    skills: []
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedOptions: string[] = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }
    
    setSelectedSkills(selectedOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectionResults({
      country: selectedCountry,
      skills: selectedSkills
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Dropdowns and List Boxes Demonstration</h1>
      <p className="mb-4 text-gray-600">
        This page demonstrates how to work with different types of dropdown lists and selectable options in Selenium.
      </p>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Single Select Dropdown */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Single Select Dropdown</h2>
          <p className="text-sm text-gray-600 mb-4">
            Select a single country from the list.
          </p>
          
          <div className="mb-4">
            <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              id="country-select"
              name="country"
              className="input-field"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">-- Select a country --</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Multi Select List Box */}
        <div className="card">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Multi Select List Box</h2>
          <p className="text-sm text-gray-600 mb-4">
            Select multiple skills using Ctrl+Click or Shift+Click.
          </p>
          
          <div className="mb-4">
            <label htmlFor="skills-select" className="block text-sm font-medium text-gray-700 mb-1">
              Skills (hold Ctrl/Cmd to select multiple)
            </label>
            <select
              id="skills-select"
              name="skills"
              multiple
              className="input-field h-48"
              value={selectedSkills}
              onChange={handleSkillChange}
            >
              {skills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2">
          <button type="submit" id="dropdown-submit" className="btn btn-primary">
            Submit Selections
          </button>
        </div>
      </form>

      {/* Results Display */}
      <div className="card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Selection Results</h2>
        <div id="dropdown-results" className="p-4 bg-gray-100 rounded">
          <div className="mb-2">
            <strong>Selected Country:</strong> {selectionResults.country || '(none)'}
          </div>
          <div>
            <strong>Selected Skills:</strong> {selectionResults.skills.length > 0 ? selectionResults.skills.join(', ') : '(none)'}
          </div>
        </div>
      </div>

      {/* Selenium Code Examples */}
      <div className="mt-6 card">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Selenium Code Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-800">Single Select Dropdown:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Using Select class
WebElement countryDropdown = driver.findElement(By.id("country-select"));
Select countrySelect = new Select(countryDropdown);

// Select by visible text
countrySelect.selectByVisibleText("United States");

// Or select by value
countrySelect.selectByValue("United States");

// Or select by index
countrySelect.selectByIndex(1);`}
            </pre>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">Multi Select Listbox:</h3>
            <pre className="bg-gray-100 p-3 rounded overflow-x-auto text-sm">
              {`// Using Select class
WebElement skillsListbox = driver.findElement(By.id("skills-select"));
Select skillsSelect = new Select(skillsListbox);

// Check if multiple selection is supported
boolean isMultiple = skillsSelect.isMultiple();

// Select multiple options
skillsSelect.selectByVisibleText("JavaScript");
skillsSelect.selectByVisibleText("Python");
skillsSelect.selectByVisibleText("React");

// Deselect options
skillsSelect.deselectByVisibleText("Python");

// Deselect all options
skillsSelect.deselectAll();`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownsPage;