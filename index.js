api = require("./utils/api.js");
axios = require("axios");
fs = require("fs");
generateMarkdown = require("./utils/generateMarkdown.js");
inquirer = require("inquirer");

const questions = [
  
];

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, error => {
    if (error) {
      throw error;
    };
    console.log(`Wrote ${fileName} successfully.`);
  });
};

const promptUsername = () => {
  return inquirer.prompt({
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
  })
};

const promptReadMeContent = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is the title of your README?",
      name: "title"
    },
    {
      type: "input",
      message: "Describe your project in 2 to 3 sentences.",
      name: "description"
    },
    {
      type: "input",
      message: "What are the installation requirements for a contributor to get your project running on their local machine?",
      name: "installation"
    },
    {
      type: "input",
      message: "As a user, how or why would I interact with your project?",
      name: "usage"
    },
    {
      type: "input",
      message: "What license does your project use?",
      name: "license"
    },
    {
      type: "input",
      message: "How would a developer contribute to your project?",
      name: "contributing"
    },
    {
      type: "input",
      message: "How would a developer run automated tests for your project?",
      name: "tests"
    }
  ]);
};

const init = async () => {
  console.log("Hello.");

  try {
    const usernameObj = await promptUsername();
    const { username } = usernameObj;
    const userData = await api.getUser(username);
    const readMeContent = await promptReadMeContent();
    const markdownData = await generateMarkdown(readMeContent, userData);
    writeToFile("README.md", markdownData);
  } catch (error) {
    console.log(error);
  };
};

init();
