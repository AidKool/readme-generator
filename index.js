const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const path = require('path');

const writeFilePromise = util.promisify(fs.writeFile);

const questions = [
  {
    type: 'input',
    message: 'Enter project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter project installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter project usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter project contribution guidelines:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter project test instructions:',
    name: 'test',
  },
  {
    type: 'list',
    message: 'Enter project license:',
    choices: ['none', 'MIT', 'Apache 2.0', 'ISC', 'GNU GPL v3'],
    name: 'license',
  },
  {
    type: 'input',
    message: 'Enter your Github username:',
    name: 'username',
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
  },
];

function createDirectory(directory) {
  const fullPath = path.join(__dirname, directory);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
  }
}

async function writeToFile(fileName, data) {
  const directory = 'output';
  const filePath = path.join(__dirname, directory, fileName);
  try {
    const output = generateMarkdown(data);
    createDirectory(directory);
    await writeFilePromise(filePath, output);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(0);
  }
}

async function init() {
  const answers = await inquirer.prompt(questions);
  const fileName = 'README.md';
  await writeToFile(fileName, answers);
}

// Function call to initialize app
init();
