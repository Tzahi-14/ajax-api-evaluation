module.exports = {
  "verbose": true,
  "testURL": "http://localhost/",
  "testResultsProcessor": "./node_modules/jest-json-reporter",
  "setupTestFrameworkScriptFile": "jest-expect-message",
  "preset": "jest-puppeteer",
  "moduleNameMapper": {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$": "jest-transform-stub"
  }
}