// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
function userInput() {
  return inquirer.prompt([
    {
      name: "title",
      message: "What is the title of your project?",
      type: "input",
    },
    {
      name: "license",
      message: "What license do you want your project to have?",
      type: "list",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
    {
      name: "description",
      message: "What is the purpose of this project?",
      type: "input",
    },
    {
      name: "installation",
      message: "How do I install this application?",
      type: "input",
    },
    {
      name: "usage",
      message: "How do I use this application?",
      type: "input",
    },
    {
      name: "contribution",
      message: "How do I contribute to this project?",
      type: "input",
    },
    {
      name: "tests",
      message: "How do I test this application?",
      type: "input",
    },
  ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.appendFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log(`${fileName}.md has been generated.`)
  );
}

// TODO: Create a function to initialize app
async function init() {
  let answers = await userInput();
  writeToFile(answers.fileName, generateMarkdown(answers));
}

// Function call to initialize app
init();
