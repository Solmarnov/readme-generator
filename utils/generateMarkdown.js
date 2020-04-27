function generateMarkdown(data, userData) {
  return `
# ${data.title}
${data.description}

## Table of contents
*  [Installation](#installation)
*  [Usage](#usage)
*  [License](#license)
*  [Contributing](#contributing)
*  [Tests](#tests)
*  [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Authors
${userData.login}  
<img src="${userData.avatarUrl}" width="30">
`;
}

module.exports = generateMarkdown;
