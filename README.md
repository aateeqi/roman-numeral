# Number to Roman Numeral Converter

Number to Roman Numeral Converter is a Javascript and React application which converts a number to its equivalent Roman Numeral String

## Getting Started

### 1.`npm install`
Installs required dependencies for the project
### 2. `npm start`
Runs the app in the development mode on [http://localhost:8080](http://localhost:8080) 
To use converter either:
- Visit [http://localhost:8080](http://localhost:8080), Enter a number (between 1-3999) and submit
- Directly visit /romannumeral page and modify query param for any value you wish to convert i.e.for 100 visit http://localhost:8080/romannumeral?query=100 

## Testing
The application uses [Jest](https://jestjs.io/)  and [React-test-Renderer](https://www.npmjs.com/package/react-test-renderer) for testing

### `npm test`
Launches the test runner in the interactive watch mode.\
Each component has a corresponding `*.test.js/jsx` file inside of a `__tests__` which is run. For UI components, snapshot tests are run by comparing the previous snapshot (saved in the `__snapshots__` folder as `ComponentName.test.snap`).


## Folder Layout

All components can be found inside of the `src/components` folder. Currently there are 3 pages components: HomePage, RomanNumeralPage, and NotFoundPage. 

The `utils` folder includes the `extractParamFromQueryString` function which extracts the number outside of the query string
The `service` folder includes the `romanNumeralService.js` which runs the main conversion algorithm from number to roman numeral.

## Other Dependencies 
This app leverages a few `npm` packages: 
- [Reach Router](https://reach.tech/router/) for in-app routing 
- [query-string](https://www.npmjs.com/package/query-string) package to parse query strings