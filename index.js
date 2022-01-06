const { prompt } = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown');

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

async function writeToFile(fileName, data) {
  const filePath = `./output/${fileName}`;
  try {
    const output = generateMarkdown(data);
    await writeFile(filePath, output);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(0);
  }
}

async function init() {
  const answers = await prompt(questions);
  const fileName = 'README.md';
  await writeToFile(fileName, answers);
  console.error(answers);
}

// Function call to initialize app
init();
