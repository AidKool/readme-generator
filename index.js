// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter your project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter your project installation instructions:',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter your project usage information:',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Enter your project contribution guidelines:',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter your project test instructions:',
    name: 'test',
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
