# MobileAutomatizationBooking

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

* [Node.js](https://nodejs.org/) installed on your local machine.
* [npm](https://www.npmjs.com/) (Node Package Manager) installed. npm typically comes bundled with Node.js.

### Installation

1. Clone the repository to your local machine: git clone https://github.com/Tesena-smart-testing/MobileAutomatizationBooking.git
2. Open your terminal and navigate to the project directory: cd `<project-directory>`
3. Install the project dependencies using npm: npm install
4. Install WebDriverIO globally (if not already installed):npm install -g webdriverio
5. Install Android Studio if you haven't already. You can download it from the [official website](https://developer.android.com/studio).

## Using Allure Reporter for Test Reporting

### Installation

Before you can start using the Allure reporter, you need to install the necessary dependencies. You can do this using npm:

npm install @wdio/allure-reporter --save-dev
npm install allure-commandline

### Configuration

Once you have the required packages installed, you need to configure your test framework to use the Allure reporter. This example shows how to configure it with WebDriverIO:

// In your WebDriverIO configuration file (e.g., wdio.conf.js)

const { join } = require('path');

exports.config = {
  // Other WebDriverIO configuration settings...

  reporters: ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: false,
    disableWebdriverScreenshotsReporting: false,
  }]],
};

### Generating and Viewing Reports

After configuring your test framework, you can generate and view Allure reports. Here are the steps to do so:

1. Run your tests.
2. Generate Allure report:

   npx allure generate allure-results && npx allure open

### Cleaning the allure-results Folder

It's essential to clean the contents of the `allure-results` folder before generating a new report to prevent any conflicting data. You can do this by adding the `--clean` flag to the `allure generate` command:

npx allure generate --clean allure-results && npx allure open

### Running the Project

To run the project, follow these steps:

1. Open your terminal and navigate to the project directory if you haven't already: cd `<project-directory>`
2. Execute the following command to run the project using WebDriverIO: npx wdio run ./wdio.conf.js

   This command will execute your project's WebDriverIO configuration file (`wdio.conf.js`) and run your automated tests.

   Commands:

   npx wdio run ./wdio.conf.js

   npx allure generate --clean allure-results && npx allure open

   **If you want to run a separated spec file, use this command:**

   npx wdio wdio.conf.js --spec ./tests/specs/app.hotel.spec.js
