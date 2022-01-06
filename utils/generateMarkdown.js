// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'none':
      return '';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'none':
      return '';
    default:
      return '* [License](#license)\n';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'none':
      return '';
    default:
      return `## License\nProject licensed under the ${license} license`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = `
  # ${data.title}\n

  ${renderLicenseBadge(data.license)}

  ## Description\n
  ${data.description}

  ## Table of Contents\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)\n
  * [Tests](#tests)\n

  ## Installation\n
  ${data.installation}

  ## Usage\n
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing\n
  ${data.contribution}

  ## Tests\n
  ${data.test}

  ---
  ## Questions\n
  Contact me at\n
  Github: [@${data.username}](https://github.com/${data.username})\n
  Email: ${data.email}
  `;

  return output;
}

module.exports = generateMarkdown;
