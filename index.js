// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter project description:',
    name: 'Description',
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
  {
    type: 'input',
    message: 'Enter your file name:',
    name: 'filename',
  },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  const filePath = `./output/${fileName}`;
  let output = '';
  try {
    for (key in data) {
      output += `#${key}\n${data[key]}\n\n`;
    }
    await writeFile(filePath, output);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
}

async function inquirerAsync(questions) {
  try {
    const answers = await prompt(questions);
    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirerAsync(questions);
  const fileName = 'README.md';
  await writeToFile(fileName, answers);
  console.log(answers);
}

// Function call to initialize app
init();