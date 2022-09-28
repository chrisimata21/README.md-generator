// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = [
  "GNU AGPLv3",
  "GNU GPLv3",
  "GNU LGPLv3",
  "Mozilla Public License 2.0",
  "Apache License 2.0",
  "MIT License",
  "Boost Software License 1.0",
  "The Unlicense",
];
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === licenseArr[1]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === licenseArr[2]) {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === licenseArr[3]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === licenseArr[4]) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === licenseArr[5]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === licenseArr[6]) {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === licenseArr[7]) {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[0]}](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === licenseArr[2]) {
    return `[${licenseArr[2]}](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license === licenseArr[3]) {
    return `[${licenseArr[3]}](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === licenseArr[4]) {
    return `[${licenseArr[4]}](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === licenseArr[5]) {
    return `[${licenseArr[5]}](https://opensource.org/licenses/MIT)`;
  } else if (license === licenseArr[6]) {
    return `[${licenseArr[6]}](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === licenseArr[7]) {
    return `[${licenseArr[7]}](http://unlicense.org/)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
