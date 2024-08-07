Weather App
A simple weather application built with Express.js, Axios, and EJS. This app allows users to enter a city name and get the current weather details including temperature, feels-like temperature, description, humidity, wind speed, and cloudiness.

Features
- Enter a city name to get weather information.
- Displays current weather data including:
  - Temperature
  - Feels Like
  - Description
  - Humidity
  - Wind Speed
  - Cloudiness
- Stylish user interface with CSS.

Technologies Used
- Node.js: Server-side JavaScript runtime.
- Express.js: Web framework for Node.js.
- Axios: HTTP client for making API requests.
- EJS: Templating engine for rendering HTML.
- OpenWeatherMap API: Provides weather data.

Prerequisites
- Node.js (v12 or later)
- npm (Node Package Manager)

Installation

1. Clone the repository:

   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

2. Install the dependencies:

   npm install

3. Set up environment variables:
   - Create a `.env` file at the root of the project.
   - Create API key in https://openweathermap.org/api/one-call-3.
   - Add your OpenWeatherMap API key to the .env file:

     OPENWEATHERMAP_API_KEY=your_new_api_key

4. Start the server:

   node app.js

5. Open your browser and navigate to:

   http://localhost:3000

Usage
1. On the homepage, enter a city name in the input field and click the "Get Weather" button.
2. The application will display the current weather details for the entered city.

File Structure
- app.js: Main server file where the Express application is configured.
- views/: Contains EJS templates for the app.
  - index.ejs: Homepage template with the city input form.
  - weather.ejs: Template for displaying weather details.
  - error.ejs: Template for error handling.
- public/: Directory for static files like CSS.
  - styles.css: Stylesheet for the application.
- .env: File for environment variables (not tracked by Git).
- .gitignore: Specifies files and directories to be ignored by Git.

Security Note
- API Key Management**: Ensure your API key is stored securely in the .env file and not exposed in your code or version control.
