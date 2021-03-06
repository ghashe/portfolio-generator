const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw new err();
//   console.log(err);

//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is the name of your project?",
//     },

//     {
//       type: "input",
//       name: "description",
//       message: "Provide a description of the project (required)",
//     },

//     {
//       type: "checkbox",
//       name: "languages",
//       message: "What did you build this project with? (Chack all that apply",
//       choices: [
//         "JavaScript",
//         "HTML",
//         "CSS",
//         "ES6",
//         "JQuery",
//         "Bootstrap",
//         "Node",
//       ],
//     },

//     {
//       type: "input",
//       name: "link",
//       message: "Enter the GitHub link to your project. (required)",
//     },

//     {
//       type: "confirm",
//       name: "feature",
//       message: "Would you like to feature this project?",
//       default: false,
//     },

//     {
//       type: "confirm",
//       name: "confirmAddProject",
//       message: "would you like to enter another project?",
//       default: false,
//     },
//   ]);
// };
// promptUser().then((answers) => console.log(answers));

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      tyoe: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some information about yourself:",
    },
  ]);
};

// promptUser().then((answers) => console.log(answers));

const promptProject = (portfolioData) => {
  console.log(`

    =======================
    Add a Nwe Project
    =======================
    
    `);

  // If there's no 'projects' array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
      },

      {
        type: "input",
        name: "description",
        message: "Provide a description of the prooject (required)",
      },

      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (check that all allpay",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },

      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
      },

      {
        type: "confirm",
        name: "feature",
        message: "Would you like to feature this project?",
        default: false,
      },

      {
        type: "confirm",
        name: "confirmAddProject",
        message: "Would you like to enter another project?",
        default: false,
      },
    ])
    .then((projectData) => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
};

promptUser()
  .then(promptProject)
  .then((portfolioData) => {
    console.log(portfolioData);
  });
