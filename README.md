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

### Running the Project

To run the project, follow these steps:

1. Open your terminal and navigate to the project directory if you haven't already: cd `<project-directory>`
2. Execute the following command to run the project using WebDriverIO: npx wdio run ./wdio.conf.js

   This command will execute your project's WebDriverIO configuration file (`wdio.conf.js`) and run your automated tests.
